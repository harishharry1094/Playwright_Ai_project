# Sauce Demo E-commerce Core Operations Test Plan

## Application Overview

Functional test plan for the Swag Labs demo storefront at https://www.saucedemo.com, covering the five primary end-user operations: signing in, browsing products, managing a cart, entering checkout information, and placing an order. Exploration confirmed the login page advertises standard_user with password secret_sauce; the inventory contains six products, supports name and price sorting, and exposes product details. Checkout includes required customer fields, an order overview with payment/shipping and totals, and a final order-confirmation page. Each scenario is independent and starts in a fresh browser context with no authenticated session or cart state; use the listed demo account when setup requires authentication.

## Test Scenarios

### 1. 1. Sign in

**Seed:** `tests/seed.spec.ts`

#### 1.1. Validate login errors and sign in with a standard demo account

**File:** `tests\sauce-demo\01-login.spec.ts`

**Steps:**
  1. Start from a fresh browser context with no authenticated session or saved cart. Navigate to https://www.saucedemo.com.
    - expect: The Swag Labs login form is displayed with Username, Password, and Login controls.
  2. Submit the login form with both fields empty.
    - expect: A visible validation error is shown and the user remains on the login page.
  3. Enter locked_out_user and the documented shared password secret_sauce, then select Login.
    - expect: A visible login error indicates access is unavailable for this account; the user remains on the login page.
  4. Replace the username with standard_user, keep password secret_sauce, and select Login.
    - expect: The user is authenticated and navigated to the Products inventory page.
    - expect: Six product cards are displayed and the cart starts empty.

### 2. 2. Browse products

**Seed:** `tests/seed.spec.ts`

#### 2.1. Browse the catalog, sort products, and view product details

**File:** `tests\sauce-demo\02-browse-products.spec.ts`

**Steps:**
  1. Start from a fresh browser context, navigate to the site, and sign in as standard_user with password secret_sauce.
    - expect: The Products inventory page is displayed with six products and the default Name (A to Z) ordering.
  2. Review the product names and displayed prices in the default order.
    - expect: The product cards show each product name, description, price, and an Add to cart control.
  3. Choose Price (low to high) from the Sort products control.
    - expect: Products are reordered from lowest to highest price; Sauce Labs Onesie ($7.99) appears before Sauce Labs Bike Light ($9.99).
  4. Choose Price (high to low) from the Sort products control.
    - expect: Products are reordered from highest to lowest price; Sauce Labs Fleece Jacket ($49.99) appears before the lower-priced products.
  5. Open the Sauce Labs Backpack product details, then select Back to products.
    - expect: The detail page shows the Sauce Labs Backpack name, description, $29.99 price, and Add to cart control.
    - expect: Back to products returns to the inventory page without adding the product to the cart.

### 3. 3. Manage shopping cart

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add, review, remove, and retain cart items while navigating

**File:** `tests\sauce-demo\03-cart-management.spec.ts`

**Steps:**
  1. Start from a fresh browser context and sign in as standard_user with password secret_sauce.
    - expect: The inventory page is displayed and the cart badge is empty.
  2. Add Sauce Labs Backpack and Sauce Labs Bike Light from the inventory.
    - expect: Each Add to cart control changes to Remove.
    - expect: The cart badge displays 2.
  3. Open the cart.
    - expect: The cart shows both selected products with quantity 1 each and their matching names and prices.
    - expect: Continue Shopping and Checkout controls are available.
  4. Remove Sauce Labs Bike Light from the cart.
    - expect: The Bike Light is no longer listed, Sauce Labs Backpack remains, and the cart badge displays 1.
  5. Select Continue Shopping, then open the cart again.
    - expect: The inventory page is shown after Continue Shopping.
    - expect: The cart retains Sauce Labs Backpack and its badge remains 1.
  6. Remove Sauce Labs Backpack and reopen the cart.
    - expect: The cart badge is empty and the cart contains no product rows.
    - expect: The empty cart still provides a way to Continue Shopping.

### 4. 4. Checkout information and review

**Seed:** `tests/seed.spec.ts`

#### 4.1. Validate checkout information and verify order overview before placing an order

**File:** `tests\sauce-demo\04-checkout-review.spec.ts`

**Steps:**
  1. Start from a fresh browser context, sign in as standard_user with password secret_sauce, add Sauce Labs Backpack, and open the cart.
    - expect: The cart contains Sauce Labs Backpack and Checkout is available.
  2. Select Checkout and submit the Your Information form without entering any values.
    - expect: A visible validation error is shown and the user remains on Checkout: Your Information.
  3. Enter Ada in First Name and Lovelace in Last Name, leave Zip/Postal Code empty, and select Continue.
    - expect: A visible validation error is shown for the missing required information; the checkout form remains available.
  4. Enter 12345 in Zip/Postal Code and select Continue.
    - expect: The Checkout: Overview page is displayed with Sauce Labs Backpack and its $29.99 item price.
  5. Review the payment, shipping, item subtotal, tax, and total values, then select Cancel.
    - expect: Payment Information shows SauceCard #31337 and Shipping Information shows Free Pony Express Delivery!.
    - expect: For the single $29.99 Backpack, the overview shows item total $29.99, tax $2.40, and total $32.39.
    - expect: Cancel returns to the cart without placing the order; the Backpack remains in the cart.

### 5. 5. Place an order

**Seed:** `tests/seed.spec.ts`

#### 5.1. Complete checkout and verify order confirmation

**File:** `tests\sauce-demo\05-place-order.spec.ts`

**Steps:**
  1. Start from a fresh browser context and sign in as standard_user with password secret_sauce.
    - expect: The Products inventory page is displayed with an empty cart.
  2. Add Sauce Labs Backpack and open the cart.
    - expect: The cart badge shows 1 and the cart contains Sauce Labs Backpack at $29.99.
  3. Select Checkout, enter First Name Ada, Last Name Lovelace, and Zip/Postal Code 12345, then select Continue.
    - expect: Checkout: Overview is displayed with the Backpack and the expected item total $29.99, tax $2.40, and total $32.39.
  4. Select Finish to place the order.
    - expect: The Checkout: Complete! page is displayed with the heading Thank you for your order! and the dispatch confirmation message.
    - expect: The cart is empty after successful order completion.
  5. Select Back Home.
    - expect: The user returns to the Products inventory page and can continue shopping.
