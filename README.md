# Diary
Diary is a web-based diary application. Its backend is implemented using Laravel, while the frontend relies on Vue.

## Configuration
Please copy the .env.example file over to .env and specify APP_URL and DB-Connection details.

## Building
* php artisan key:generate
* php artisan migrate
* npm install
* npm run dev

## Hosting
I recommend using Laravel Valet or Homestead. Host the public/ directory.
