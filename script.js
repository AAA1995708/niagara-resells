/**
 * Niagara Resells — Main Application Logic
 * 
 * Features:
 * - Product filtering by category + live search
 * - Cart with quantity controls (+ / -)
 * - Cart drawer slide-in panel
 * - Order request modal with form validation
 * - FormSubmit.co email integration
 * - Scroll reveal animations
 * - Keyboard accessible
 */

/* ═══════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════ */

let activeCategory = "All";
let cart = []; // Array of { productId, quantity }
let selectedPreference = "";

/* ═══════════════════════════════════════════════════════
   INITIALIZATION
   ═══════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function () {
  renderFilters();
  renderProducts();
  initScrollEffects();
  initRevealObserver();
  updateCartUI();
});

/* ═══════════════════════════════════════════════════════
   PRODUCT RENDERING
   ═══════════════════════════════════════════════════════ */

function renderFilters() {
  const container = document.getElementById("filters-container");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(function (cat) {
    const count =
      cat === "All"
        ? PRODUCTS.length
        : PRODUCTS.filter(function (p) {
            return p.category === cat;
          }).length;
    const isActive = cat === activeCategory;
    return (
      '<button class="filter-btn' +
      (isActive ? " active" : "") +
      '" onclick="setCategory(\'' +
      cat +
      '\')" aria-pressed="' +
      isActive +
      '">' +
      cat +
      '<span class="filter-count"> (' +
      count +
      ")</span></button>"
    );
  }).join("");
}

function getFilteredProducts() {
  const query = document
    .getElementById("search-input")
    .value.toLowerCase()
    .trim();
  const clearBtn = document.getElementById("search-clear");
  const statusEl = document.getElementById("search-status");

  // Toggle clear button visibility
  if (clearBtn) {
    clearBtn.classList.toggle("visible", query.length > 0);
  }

  return PRODUCTS.filter(function (product) {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      (product.colors && product.colors.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  const countEl = document.getElementById("product-count");
  const statusEl = document.getElementById("search-status");
  if (!grid) return;

  const query = document
    .getElementById("search-input")
    .value.toLowerCase()
    .trim();
  const filtered = getFilteredProducts();

  // Update count text
  if (countEl) {
    countEl.textContent =
      PRODUCTS.length + " items \u2014 " + (CATEGORIES.length - 1) + " categories";
  }

  // Update search status
  if (statusEl) {
    if (query) {
      statusEl.innerHTML =
        "Showing " +
        filtered.length +
        " result" +
        (filtered.length !== 1 ? "s" : "") +
        ' for <strong>"' +
        escapeHTML(query) +
        '"</strong>';
      statusEl.style.display = "block";
    } else {
      statusEl.style.display = "none";
    }
  }

  // Empty state
  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="empty-state">' +
      '<div class="empty-state-icon">\uD83D\uDD0D</div>' +
      "<h3>No products found</h3>" +
      "<p>Try a different search or category</p>" +
      '<button class="empty-state-clear" onclick="resetFilters()">' +
      "Clear filters</button>" +
      "</div>";
    return;
  }

  // Build product cards
  grid.innerHTML = filtered
    .map(function (product) {
      return buildCardHTML(product);
    })
    .join("");
}

function buildCardHTML(product) {
  const cartItem = cart.find(function (c) {
    return c.productId === product.id;
  });
  const inCart = cartItem && cartItem.quantity > 0;
  const qty = inCart ? cartItem.quantity : 0;

  const imagesHTML = product.images
    .map(function (url, i) {
      return (
        '<img src="' +
        url +
        '" alt="' +
        escapeHTML(product.name) +
        '" loading="lazy"' +
        (i === 0 ? ' onload="this.parentElement.classList.remove(\'loading\')"' : "") +
        " />"
      );
    })
    .join("");

  const tagHTML = product.tag
    ? '<div class="card-tag">' + escapeHTML(product.tag) + "</div>"
    : "";

  const colorsHTML = product.colors
    ? '<div class="card-colors">' + escapeHTML(product.colors) + "</div>"
    : "";

  const noteHTML = product.note
    ? '<div class="card-note">' + escapeHTML(product.note) + "</div>"
    : "";

  const btnClass = inCart ? "card-add-btn in-cart" : "card-add-btn";
  const btnLabel = inCart
    ? "\u2713 Added (" + qty + ")"
    : '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Add';

  return (
    '<div class="product-card reveal">' +
    '<div class="card-image-wrapper loading">' +
    imagesHTML +
    '<div class="card-price-badge">$' +
    product.price +
    "</div>" +
    tagHTML +
    "</div>" +
    '<div class="card-body">' +
    '<div class="card-name">' +
    escapeHTML(product.name) +
    "</div>" +
    colorsHTML +
    noteHTML +
    '<div class="card-bottom-price">$' +
    product.price +
    "</div>" +
    '<button class="' +
    btnClass +
    '" id="add-btn-' +
    product.id +
    '" onclick="addToCart(\'' +
    product.id +
    '\')" aria-label="Add ' +
    escapeHTML(product.name) +
    " to cart\">" +
    btnLabel +
    "</button>" +
    "</div>" +
    "</div>"
  );
}

/* ═══════════════════════════════════════════════════════
   FILTERING & SEARCH
   ═══════════════════════════════════════════════════════ */

function setCategory(category) {
  activeCategory = category;
  renderFilters();
  renderProducts();
}

function clearSearch() {
  var input = document.getElementById("search-input");
  if (input) input.value = "";
  renderProducts();
}

function resetFilters() {
  var input = document.getElementById("search-input");
  if (input) input.value = "";
  activeCategory = "All";
  renderFilters();
  renderProducts();
}

/* ═══════════════════════════════════════════════════════
   CART LOGIC
   ═══════════════════════════════════════════════════════ */

function addToCart(productId) {
  var existing = cart.find(function (c) {
    return c.productId === productId;
  });
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId: productId, quantity: 1 });
  }
  updateCartUI();
  renderProducts();
  renderCartItems();
}

function removeFromCart(productId) {
  cart = cart.filter(function (c) {
    return c.productId !== productId;
  });
  updateCartUI();
  renderProducts();
  renderCartItems();
}

function updateCartQuantity(productId, delta) {
  var item = cart.find(function (c) {
    return c.productId === productId;
  });
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  updateCartUI();
  renderProducts();
  renderCartItems();
}

function setCartQuantity(productId, newQty) {
  var qty = parseInt(newQty, 10);
  if (isNaN(qty) || qty <= 0) {
    removeFromCart(productId);
    return;
  }
  var item = cart.find(function (c) {
    return c.productId === productId;
  });
  if (item) {
    item.quantity = qty;
    updateCartUI();
    renderProducts();
    renderCartItems();
  }
}

function clearCart() {
  cart = [];
  updateCartUI();
  renderProducts();
  renderCartItems();
}

function getCartItemCount() {
  return cart.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);
}

function getCartTotal() {
  return cart.reduce(function (sum, item) {
    var product = PRODUCTS.find(function (p) {
      return p.id === item.productId;
    });
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateCartUI() {
  var count = getCartItemCount();
  var badge = document.getElementById("cart-badge");
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle("visible", count > 0);
  }

  var checkoutBtn = document.getElementById("cart-checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.disabled = count === 0;
  }

  var clearBtn = document.getElementById("cart-clear-btn");
  if (clearBtn) {
    clearBtn.style.display = count > 0 ? "block" : "none";
  }
}

/* ═══════════════════════════════════════════════════════
   CART DRAWER
   ═══════════════════════════════════════════════════════ */

function openCart() {
  renderCartItems();
  document.getElementById("cart-overlay").classList.add("open");
  document.getElementById("cart-drawer").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-overlay").classList.remove("open");
  document.getElementById("cart-drawer").classList.remove("open");
  document.body.style.overflow = "";
}

function renderCartItems() {
  var container = document.getElementById("cart-items-list");
  var totalEl = document.getElementById("cart-total");
  var countEl = document.getElementById("cart-count");
  if (!container) return;

  // Update total
  if (totalEl) {
    totalEl.textContent = "$" + getCartTotal();
  }

  // Update count in drawer header
  if (countEl) {
    countEl.textContent = getCartItemCount();
  }

  // Empty state
  if (cart.length === 0) {
    container.innerHTML =
      '<div class="cart-empty">' +
      '<div class="cart-empty-icon">\uD83D\uDED2</div>' +
      "<p>Your cart is empty</p>" +
      "</div>";
    return;
  }

  // Cart items
  container.innerHTML = cart
    .map(function (item, index) {
      var product = PRODUCTS.find(function (p) {
        return p.id === item.productId;
      });
      if (!product) return "";

      var lineTotal = product.price * item.quantity;

      return (
        '<div class="cart-item" style="animation-delay:' +
        index * 40 +
        'ms">' +
        '<div class="cart-item-image">' +
        '<img src="' +
        product.images[0] +
        '" alt="' +
        escapeHTML(product.name) +
        '" loading="lazy" />' +
        "</div>" +
        '<div class="cart-item-info">' +
        '<div class="cart-item-name">' +
        escapeHTML(product.name) +
        "</div>" +
        '<div class="cart-quantity-controls">' +
        '<button class="cart-qty-btn" onclick="updateCartQuantity(\'' +
        product.id +
        '\', -1)" aria-label="Decrease quantity">\u2212</button>' +
        '<span class="cart-qty-value">' +
        item.quantity +
        "</span>" +
        '<button class="cart-qty-btn" onclick="updateCartQuantity(\'' +
        product.id +
        '\', 1)" aria-label="Increase quantity">+</button>' +
        "</div>" +
        "</div>" +
        '<div class="cart-item-price">$' +
        lineTotal +
        "</div>" +
        '<button class="cart-item-remove" onclick="removeFromCart(\'' +
        product.id +
        '\')" aria-label="Remove ' +
        escapeHTML(product.name) +
        '">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        "</button>" +
        "</div>"
      );
    })
    .join("");
}

/* ═══════════════════════════════════════════════════════
   ORDER MODAL
   ═══════════════════════════════════════════════════════ */

function openOrderModal() {
  if (cart.length === 0) return;
  closeCart();

  // Populate order items
  var itemsList = document.getElementById("order-items-list");
  var orderTotal = document.getElementById("order-total");
  var itemsInput = document.getElementById("order-items-input");
  var totalInput = document.getElementById("order-total-input");

  if (itemsList) {
    itemsList.innerHTML = cart
      .map(function (item) {
        var product = PRODUCTS.find(function (p) {
          return p.id === item.productId;
        });
        if (!product) return "";
        return (
          '<div class="order-item">' +
          '<div class="order-item-name">' +
          '<span class="order-item-dot"></span>' +
          "<span>" +
          escapeHTML(product.name) +
          " x" +
          item.quantity +
          "</span>" +
          "</div>" +
          '<div class="order-item-price">$' +
          product.price * item.quantity +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  if (orderTotal) {
    orderTotal.textContent = "$" + getCartTotal();
  }

  // Hidden inputs for form submission
  var itemsText = cart
    .map(function (item) {
      var product = PRODUCTS.find(function (p) {
        return p.id === item.productId;
      });
      return product ? product.name + " x" + item.quantity + " \u2014 $" + product.price * item.quantity : "";
    })
    .join("\n");

  if (itemsInput) itemsInput.value = itemsText;
  if (totalInput) totalInput.value = "$" + getCartTotal();

  // Reset preference
  selectedPreference = "";
  var prefInput = document.getElementById("order-preference-input");
  if (prefInput) prefInput.value = "";

  var prefBtns = document.querySelectorAll(".preference-btn");
  prefBtns.forEach(function (btn) {
    btn.classList.remove("selected");
  });

  // Reset submit button
  var submitBtn = document.getElementById("order-submit-btn");
  if (submitBtn) {
    submitBtn.classList.remove("success");
    submitBtn.innerHTML =
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Order Request';
    submitBtn.disabled = false;
  }

  var noteEl = document.querySelector(".order-note");
  if (noteEl) {
    noteEl.textContent = "We'll get back to you fast via email or Snapchat";
    noteEl.style.color = "";
  }

  // Open modal with slight delay for smooth transition
  setTimeout(function () {
    document.getElementById("order-overlay").classList.add("open");
    document.getElementById("order-modal").classList.add("open");
    document.body.style.overflow = "hidden";
  }, 250);
}

function closeOrderModal() {
  document.getElementById("order-overlay").classList.remove("open");
  document.getElementById("order-modal").classList.remove("open");
  document.body.style.overflow = "";
}

function backToCart() {
  closeOrderModal();
  setTimeout(function () {
    openCart();
  }, 250);
}

function setPreference(btn, value) {
  document.querySelectorAll(".preference-btn").forEach(function (b) {
    b.classList.remove("selected");
  });
  btn.classList.add("selected");
  selectedPreference = value;
  var prefInput = document.getElementById("order-preference-input");
  if (prefInput) prefInput.value = value;
}

function submitOrder() {
  var form = document.getElementById("order-form");
  var name = form.querySelector('[name="Name"]');
  var email = form.querySelector('[name="Email"]');
  var area = form.querySelector('[name="Area"]');

  // Validate required fields
  if (!name.value.trim()) {
    name.focus();
    return;
  }
  if (!email.value.trim() || !email.validity.valid) {
    email.focus();
    return;
  }
  if (!area.value) {
    area.focus();
    return;
  }

  var submitBtn = document.getElementById("order-submit-btn");
  if (!submitBtn || submitBtn.disabled) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  var formData = new FormData(form);

  fetch("https://formsubmit.co/ajax/liamwattps@gmail.com", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      if (response.ok) {
        submitBtn.classList.add("success");
        submitBtn.innerHTML = "\u2713 Order Sent!";
        var noteEl = document.querySelector(".order-note");
        if (noteEl) {
          noteEl.textContent =
            "Check your email for confirmation. We'll reach out soon!";
          noteEl.style.color = "#60a5fa";
        }
        // Clear cart after successful submission
        setTimeout(function () {
          clearCart();
          closeOrderModal();
        }, 2500);
      } else {
        throw new Error("Submission failed");
      }
    })
    .catch(function () {
      submitBtn.disabled = false;
      submitBtn.textContent = "Retry Send";
      alert("Something went wrong. Please try again or email us directly at liamwattps@gmail.com");
    });
}

/* ═══════════════════════════════════════════════════════
   SCROLL EFFECTS
   ═══════════════════════════════════════════════════════ */

function initScrollEffects() {
  var nav = document.getElementById("navbar");
  var scrollBtn = document.getElementById("scroll-top-btn");
  var lastScroll = 0;

  window.addEventListener(
    "scroll",
    function () {
      var scrollY = window.scrollY;

      // Navbar background on scroll
      if (nav) {
        nav.classList.toggle("scrolled", scrollY > 50);
      }

      // Scroll to top button
      if (scrollBtn) {
        scrollBtn.classList.toggle("visible", scrollY > 500);
      }

      lastScroll = scrollY;
    },
    { passive: true }
  );

  // Scroll to top
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ═══════════════════════════════════════════════════════
   REVEAL ON SCROLL (IntersectionObserver)
   ═══════════════════════════════════════════════════════ */

function initRevealObserver() {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.02, rootMargin: "0px 0px -20px 0px" }
  );

  document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) {
    observer.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════ */

function escapeHTML(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// Close modals on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (document.getElementById("order-modal").classList.contains("open")) {
      closeOrderModal();
    } else if (document.getElementById("cart-drawer").classList.contains("open")) {
      closeCart();
    }
  }
});
