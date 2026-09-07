/* =========================================================
   Openhand Foundation — site behaviour
   Vanilla JS, no dependencies, no build step.
   ========================================================= */
(function () {
  "use strict";

  /* ---- Mobile navigation ------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close the menu when a link is chosen or Escape is pressed.
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- Highlight the current page in the nav ----------- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (link) {
    var target = link.getAttribute("href");
    if (!target || target.charAt(0) === "#") return;
    if (target.split("#")[0] === here) link.setAttribute("aria-current", "page");
  });

  /* ---- Header state over a dark hero ------------------- */
  // The home page header sits transparently on the hero, then turns solid.
  var scrollHeader = document.querySelector("[data-header-scroll]");
  if (scrollHeader) {
    var hero = document.querySelector(".h-hero, .g-hero");
    var setHeaderState = function () {
      var trigger = hero ? hero.offsetHeight - scrollHeader.offsetHeight : 80;
      scrollHeader.classList.toggle("is-stuck", window.scrollY > trigger);
    };
    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
    window.addEventListener("resize", setHeaderState);
  }

  /* ---- Current year in the footer ---------------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---- Reveal on scroll -------------------------------- */
  var revealables = document.querySelectorAll(".reveal");
  if (revealables.length) {
    if ("IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealables.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      revealables.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  /* ---- Animated impact counters ------------------------ */
  // Markup: <span class="stat-value" data-count="12400" data-suffix="+">0</span>
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;

    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var render = function (value) {
      el.textContent =
        prefix +
        value.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        }) +
        suffix;
    };

    if (reduced) {
      render(target);
      return;
    }

    var duration = 1400;
    var start = null;

    function step(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - progress, 3);
      render(target * eased);
      if (progress < 1) requestAnimationFrame(step);
      else render(target);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    // Markup carries the final value so it still reads correctly without JS;
    // zero it only once we know the animation will run.
    counters.forEach(function (el) {
      el.textContent = (el.getAttribute("data-prefix") || "") + "0" +
        (el.getAttribute("data-suffix") || "");
    });
    if ("IntersectionObserver" in window) {
      var countObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            animateCount(entry.target);
            countObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach(function (el) {
        countObserver.observe(el);
      });
    } else {
      counters.forEach(animateCount);
    }
  }

  /* ---- Category filters (news, events, programs) -------- */
  // Markup: buttons with data-filter="tag"; items with data-category="tag".
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    var listId = group.getAttribute("data-filter-group");
    var list = document.getElementById(listId);
    if (!list) return;

    var items = Array.prototype.slice.call(list.querySelectorAll("[data-category]"));
    var empty = document.querySelector('[data-empty-for="' + listId + '"]');

    group.addEventListener("click", function (e) {
      var button = e.target.closest("[data-filter]");
      if (!button) return;

      var value = button.getAttribute("data-filter");
      group.querySelectorAll("[data-filter]").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === button));
      });

      var shown = 0;
      items.forEach(function (item) {
        var match = value === "all" || item.getAttribute("data-category") === value;
        item.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  });

  /* ---- Form validation + submission -------------------- */
  // Progressive enhancement: forms without a real backend show a
  // confirmation message. Point `action` at your form handler to go live.
  document.querySelectorAll("[data-validate]").forEach(function (form) {
    var status = form.querySelector(".form-status");

    var showError = function (field, message) {
      var slot = field.parentElement.querySelector(".error");
      if (slot) slot.textContent = message;
      field.setAttribute("aria-invalid", message ? "true" : "false");
    };

    var validateField = function (field) {
      if (!field.checkValidity()) {
        var message = field.validity.valueMissing
          ? "This field is required."
          : field.type === "email"
          ? "Enter a valid email address."
          : "Please check this value.";
        showError(field, message);
        return false;
      }
      showError(field, "");
      return true;
    };

    form.querySelectorAll("input, textarea, select").forEach(function (field) {
      field.addEventListener("blur", function () {
        validateField(field);
      });
      field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid") === "true") validateField(field);
      });
    });

    form.addEventListener("submit", function (e) {
      var fields = Array.prototype.slice.call(
        form.querySelectorAll("input, textarea, select")
      );
      var valid = fields.map(validateField).every(Boolean);

      if (!valid) {
        e.preventDefault();
        var firstBad = form.querySelector('[aria-invalid="true"]');
        if (firstBad) firstBad.focus();
        return;
      }

      // No backend wired up yet — confirm locally instead of navigating away.
      if (!form.getAttribute("action")) {
        e.preventDefault();
        if (status) {
          status.hidden = false;
          status.textContent =
            form.getAttribute("data-success") ||
            "Thank you — we have received your message and will be in touch.";
          status.focus();
        }
        form.reset();
      }
    });
  });
})();
