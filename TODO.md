# Violin Garden — список улучшений и приоритеты

Анализ проекта от 2026-06-25. Проект собирается чисто (Next.js 16, статический экспорт,
TypeScript strict). Ниже — найденные недочёты, сгруппированные по приоритету.

Легенда статуса: `[ ]` — не сделано · `[~]` — в работе · `[x]` — готово

---

## 🔴 P0 — Критично (сломано / бьёт по бизнесу)

- [x] **1. Кнопки запроса не работают — нет конверсии.** ✅ Решено (коммит `548778c`).
  Кнопки «nakup / izposoja / preizkus» теперь открывают модальную контактную форму
  (`components/violin/InquiryModal.tsx`) с отправкой через Web3Forms. Проверено:
  `onClick` на кнопках, полная форма (имя/email/телефон/сообщение), ключ
  `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` задан локально (`.env.local`) и в CI
  (`deploy.yml` → `secrets.WEB3FORMS_KEY`), переводы формы есть в en/sl/de,
  honeypot + focus-trap + Escape + fallback `mailto:` при ошибке, `tsc` чисто.
  Остаётся вручную отправить тестовую заявку, чтобы подтвердить активность ключа
  и доставку письма на `inga.ulokina@gmail.com`.

- [x] **2. Мусор и архив уходят в продакшн.** ✅ Решено.
  `out/Архив.zip` уже удалён (в `out/` отсутствует, в git не закоммичен).
  В `deploy.yml` добавлены `--exclude='.DS_Store'` и `--exclude='*.zip'` в rsync.
  Локальные `.DS_Store` в `out/` подчищены. Примечание: CI собирает на Ubuntu, где
  `.DS_Store` не возникает, так что через GitHub Actions мусор и так не уходил —
  excludes защищают на случай ручного rsync с macOS. `/out/` и `.DS_Store` в `.gitignore`.

- [x] **3. SEO: сайт проиндексируется только на английском.** ✅ Решено (Путь A).
  Маршруты вынесены под `app/[lang]/` → статически генерируются `/sl`, `/en`, `/de`,
  каждый со своим `<html lang>` и **родным текстом в HTML** (проверено: `out/sl.html`
  `lang="sl"` + словенский, `out/en.html` `lang="en"` + английский, `out/de.html` `lang="de"`).
  Корень `/` редиректит на `/sl` (`public/index.html`, учитывает сохранённый/браузерный язык).
  Добавлено: `metadataBase`, пер-языковые `<title>`/`description`, `canonical` + hreflang
  (`sl`/`en`/`de` + `x-default`→`sl`), Open Graph + Twitter Card, `app/sitemap.ts`
  (12 маршрутов × hreflang) → `out/sitemap.xml`, `app/robots.ts` → `out/robots.txt`,
  JSON-LD (`WebSite` + `Person` на главной, `Product`+`Brand` на страницах скрипок).
  `DEFAULT_LANG` теперь `sl`. Домен в `NEXT_PUBLIC_SITE_URL` (`.env.local` + `deploy.yml`).
  Переключатель языка навигирует между URL; внутренние ссылки — через `LocaleLink`.
  `tsc` чисто, сборка зелёная (39 статических страниц).

---

## 🟠 P1 — Высокий

- [ ] **4. 8 «мёртвых» ссылок `href="#"`.**
  PROJEKTI в навигации (Hero + Header), «discover projects», ссылка в `ZbirkaSection`,
  кнопка автора, элементы футера. Клик = прыжок наверх.
  → Отключить/скрыть до готовности или сделать реальными.

- [ ] **5. Шрифты через `@import` Google Fonts в `app/globals.css`.**
  Render-blocking, 3 семейства × много начертаний, layout shift.
  → Перейти на `next/font/google` (self-host, `font-display`, preconnect).

- [ ] **6. Hero-видео.**
  Автоплей крупного внешнего MP4 с Cloudinary на всех устройствах (трафик на мобильных);
  зацикливание сделано слушателем `timeupdate` в `components/Hero/Hero.tsx` вместо
  нативного атрибута `loop` — лишние десятки срабатываний в секунду.
  → Нативный `loop`, `preload="none"` / ленивая загрузка, облегчённая версия для мобильных.

- [ ] **7. Доступность.**
  Бургер в `Hero.tsx` без `aria-expanded` (в `SubPageHeader` есть — несогласованно);
  мобильные меню без focus-trap, без закрытия по Escape, без блокировки скролла body;
  модалка галереи без `aria-label` / возврата фокуса.
  → Унифицировать поведение меню, добавить trap/Escape/scroll-lock.

---

## 🟡 P2 — Средний (поддерживаемость кода)

- [ ] **8. Дублирование и мёртвый код.**
  `components/Header/Header.tsx` не используется (закомментирован в `app/page.tsx`),
  содержит хардкод словенских `aria-label` и мёртвые ссылки. Логика навигации/бургера
  продублирована в Hero / SubPageHeader / Header. Логика слайдшоу скопирована между
  `app/violinski-vrt/CollectionView.tsx` и `app/violine-za-nove-zgodbe/ForSaleView.tsx`.
  → Вынести общий `<MobileMenu>` и `<ViolinSlideshow>`.

- [ ] **9. Устаревшие/противоречивые комментарии.**
  `lib/i18n/config.ts` пишет «Slovenian … stays the default», но `DEFAULT_LANG = "en"`;
  комментарий в `lib/i18n/LanguageProvider.tsx` утверждает, что HTML содержит словенский —
  фактически английский.
  → Привести комментарии в соответствие с кодом.

- [ ] **10. Версионирование.**
  `scripts/` и `docs/` в `.gitignore` → скрипт `scripts/optimize-images.mjs` и исходные
  тексты не под контролем версий (риск потери). Файл `viola9.md` валяется в корне и
  закоммичен.
  → Включить `scripts/` в git, убрать `viola9.md`.

- [ ] **11. Нет линтера/форматтера/гейтов CI.**
  Проект создан с `--no-eslint`, тестов нет. `deploy.yml` деплоит без шага typecheck/lint.
  → Добавить ESLint + `tsc --noEmit` как обязательный шаг перед деплоем.

- [ ] **12. Мелочи.**
  `tsconfig` target `ES2017` (устарел для React 19 / Next 16 — можно ES2020+);
  `data/violins.ts` на ~785 строк смешивает схему и контент (можно вынести контент
  в JSON / по файлам).

---

## 🟢 P3 — Низкий / nice-to-have

- [ ] **13.** `metadataBase` не задан, заголовки смешанного языка, нет canonical.
- [ ] **14.** Оптимизация изображений Next отключена (`unoptimized: true` — неизбежно при
  static export, но скрипт мог бы давать AVIF + responsive `srcset`).
- [ ] **15.** `concurrency: cancel-in-progress: true` вместе с `rsync --delete` теоретически
  может оставить сервер в частичном состоянии при отмене деплоя.

---

## Рекомендуемый порядок

1. **P0** — сначала: контактная форма (#1 → реальные деньги), чистка деплоя
   (#2 → одна строка), SEO-каркас sitemap/robots/OG (#3 — быстро даёт эффект).
2. **P1** — мёртвые ссылки (#4) и шрифты (#5): дёшево и заметно.
3. **P2** — при ближайшем рефакторинг-окне.

Максимальный эффект при минимальных изменениях: **#1 (контактная форма / `mailto`)**
и **#2 (исключения в rsync)**.
