import { test, expect } from '@playwright/test';

test('Ir a categoría Tecnología y verificar existencia de Filtros disponibles', async ({ page }) => {
  await page.goto('https://www.shopealo.com.co/home');
  await page.getByText('Categorías').click();
  await page.getByRole('link', { name: 'Tecnología' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Filtros' }).click();
});

test('Iniciar sesión', async ({ page }) => {
await page.goto('https://www.shopealo.com.co/home');
await page.getByRole('img', { name: 'icono carrito' }).click();
await page.getByRole('link', { name: 'Ingresar' }).click();
await page.locator('input[type="email"]').click();
await page.locator('input[type="email"]').fill('miguel.garcia@imagineapps.co');
await page.locator('input[type="password"]').click();
await page.locator('input[type="password"]').fill('Imagine123');
await page.getByRole('button', { name: 'Iniciar sesión' }).click();
});

test('Verificar acceso a Mi Perfil', async ({ page }) => {
  await page.goto('https://www.shopealo.com.co/home');
  await page.getByRole('link', { name: 'Perfil' }).click();
  await page.getByRole('heading', { name: 'Métodos de pago' }).click();
});

test('Verificar acceso a Mis pedidos', async ({ page }) => {
  await page.getByRole('button', { name: 'Mis pedidos' }).click();
});

test('Probar existencia y funcionamiento de Chat', async ({ page }) => {
await page.goto('https://www.shopealo.com.co/home');
await page.frameLocator('[data-test-id="chat-widget-iframe"]').getByRole('button', { name: 'Abrir chat en vivo' }).click();
await page.frameLocator('[data-test-id="chat-widget-iframe"]').getByText('Agregar chat en vivo gratis a un sitio web').click();
await page.frameLocator('[data-test-id="chat-widget-iframe"]').getByRole('button', { name: 'Cerrar chat en vivo' }).click();
});
