document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("is-ready");

    const homeHeroPhotos = [
        "assets/images/home 1.webp",
        "assets/images/home 2.webp",
        "assets/images/home 3.webp",
        "assets/images/home 4.webp",
        "assets/images/home 5.webp",
        "assets/images/home 7.webp",
        "assets/images/home 8.webp",
        "assets/images/home 9.webp",
        "assets/images/home 10.webp",
        "assets/images/home 11.webp",
        "assets/images/home 12.webp"
    ];

    const atmospherePhotos = [
        "assets/images/atmosphere 1.webp",
        "assets/images/atmosphere 2.webp",
        "assets/images/atmosphere 3.webp",
        "assets/images/atmosphere 4.webp",
        "assets/images/atmosphere 5.webp",
        "assets/images/atmosphere 6.webp",
        "assets/images/atmosphere 7.webp",
        "assets/images/atmosphere 8.webp",
        "assets/images/atmosphere 9.webp",
        "assets/images/atmosphere 10.webp",
        "assets/images/atmosphere 11.webp",
        "assets/images/atmosphere 12.webp",
        "assets/images/atmosphere 13.webp",
        "assets/images/atmosphere 14.webp",
        "assets/images/atmosphere 15.webp",
        "assets/images/atmosphere 16.webp",
        "assets/images/atmosphere 17.webp",
        "assets/images/atmosphere 18.webp",
        "assets/images/atmosphere 19.webp",
        "assets/images/atmosphere 20.webp",
        "assets/images/atmosphere 21.webp",
        "assets/images/atmosphere 22.webp",
        "assets/images/atmosphere 23.webp",
        "assets/images/atmosphere 24.webp",
        "assets/images/atmosphere 25.webp",
        "assets/images/atmosphere 26.webp",
        "assets/images/atmosphere 27.webp",
        "assets/images/atmosphere 28.webp",
        "assets/images/atmosphere 29.webp",
        "assets/images/atmosphere 30.webp",
        "assets/images/atmosphere 31.webp",
        "assets/images/atmosphere 32.webp",
        "assets/images/atmosphere 33.webp",
        "assets/images/atmosphere 34.webp",
        "assets/images/atmosphere 35.webp"
    ];

    const outreachPhotos = Array.from({ length: 43 }, (_, index) => `assets/images/outreach ${index + 1}.webp`);
    const jrtPhotos = Array.from({ length: 15 }, (_, index) => `assets/images/jrt ${index + 1}.webp`);
    const tourPhotos = Array.from({ length: 18 }, (_, index) => `assets/images/tour ${index + 1}.webp`);
    const leadershipPhotos = Array.from({ length: 4 }, (_, index) => `assets/images/leadership ${index + 1}.webp`);
    const yfcwPhotos = Array.from({ length: 30 }, (_, index) => `assets/images/yfcw (${index + 1}).webp`);
    const morePhotos = Array.from({ length: 52 }, (_, index) => `assets/images/other 1 (${index + 1}).webp`);

    const defaultAlbumPhoto = "assets/images/home.webp";
    const albumConfig = {
        outreach: {
            label: "Outreach",
            title: "Outreach Album",
            description: "Outreach moments that reflect compassion, service, and faith in action.",
            banner: "assets/images/outreach 33.webp",
            photos: outreachPhotos
        },
        jrt: {
            label: "Jesus Roundtable",
            title: "Jesus Roundtable Album",
            description: "Roundtable sessions and meaningful conversations centered on Christ.",
            photos: jrtPhotos
        },
        tours: {
            label: "Tours",
            title: "Tours Album",
            description: "Memories from ministry trips, visits, and shared journeys.",
            photos: tourPhotos
        },
        games: {
            label: "Games",
            title: "Games Album",
            description: "Fun moments of fellowship, teamwork, and joy.",
            photos: [defaultAlbumPhoto]
        },
        atmosphere: {
            label: "Atmosphere of Faith",
            title: "Atmosphere of Faith Album",
            description: "All captured moments of worship, prayer, encounters, and youth fellowship.",
            photos: atmospherePhotos
        },
        leadership: {
            label: "Leadership",
            title: "Leadership Album",
            description: "Raising young leaders through mentorship, training, and purpose-driven growth.",
            banner: "assets/images/leadership 1.webp",
            photos: leadershipPhotos
        },
        yfcw: {
            label: "Youth For Christ Worship (YFCW)",
            title: "Youth For Christ Worship (YFCW) Album",
            description: "Powerful moments of worship, praise, and spiritual encounter with YFC youth.",
            banner: "assets/images/yfcw (1).webp",
            photos: yfcwPhotos
        },
        biblestudy: {
            label: "Bible Study",
            title: "Bible Study Album",
            description: "Snapshots from Bible study circles and devotion gatherings.",
            photos: [defaultAlbumPhoto]
        },
        community: {
            label: "Community",
            title: "Community Album",
            description: "Life together, shared testimonies, and community moments in Christ.",
            photos: [defaultAlbumPhoto]
        },
        more: {
            label: "And More",
            title: "More Moments Album",
            description: "More meaningful moments and highlights from Youth For Christ.",
            banner: "assets/images/other 1 (1).webp",
            photos: morePhotos
        }
    };

    const branchConfig = {
        eastrand: { label: "Eastrand" },
        durban: { label: "Durban" },
        pretoria: { label: "Pretoria" },
        soweto: { label: "Soweto" },
        potchefstroom: { label: "Potchefstroom" },
        gqeberha: { label: "Gqeberha" },
        polokwane: { label: "Polokwane" },
        witbank: { label: "Witbank" }
    };

    const branchAlbumCategories = ["outreach", "jrt", "tours", "atmosphere", "leadership", "yfcw", "more"];

    const navToggle = document.querySelector(".nav-toggle");
    const siteNav = document.querySelector(".site-nav");
    const navLinks = document.querySelectorAll(".site-nav a");
    const heroSection = document.querySelector(".hero-section");

    if (heroSection) {
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);

        let candidateIndex = randomBuffer[0] % homeHeroPhotos.length;
        let attempts = 0;

        const applyHeroImage = (imagePath) => {
            heroSection.style.backgroundImage = `url("${imagePath}")`;
        };

        const tryLoadHeroImage = () => {
            const imagePath = homeHeroPhotos[candidateIndex];
            const probeImage = new Image();

            probeImage.onload = () => {
                applyHeroImage(imagePath);
            };

            probeImage.onerror = () => {
                attempts += 1;

                if (attempts >= homeHeroPhotos.length) {
                    return;
                }

                candidateIndex = (candidateIndex + 1) % homeHeroPhotos.length;
                tryLoadHeroImage();
            };

            probeImage.src = imagePath;
        };

        tryLoadHeroImage();
    }

    const normalizePath = (path) => path.replace(/\\/g, "/").replace(/\/index\.html$/i, "/").replace(/\/+$/g, "");

    const currentPath = normalizePath(window.location.pathname);

    for (const link of navLinks) {
        if (link.classList.contains("nav-cta")) {
            continue;
        }

        const linkPath = normalizePath(new URL(link.href, window.location.origin).pathname);
        const isProgramsGroup = currentPath.includes("/programs/") && linkPath.includes("/programs/daily-juice");
        const isGetInvolvedGroup = currentPath.includes("/get-involved/") && linkPath.includes("/get-involved/membership");

        if (linkPath === currentPath || isProgramsGroup || isGetInvolvedGroup) {
            link.classList.add("is-active");
        }
    }

    if (navToggle && siteNav) {
        const closeNav = () => {
            navToggle.setAttribute("aria-expanded", "false");
            siteNav.classList.remove("is-open");
            document.body.classList.remove("nav-open");
        };

        navToggle.addEventListener("click", () => {
            const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

            navToggle.setAttribute("aria-expanded", String(!isExpanded));
            siteNav.classList.toggle("is-open", !isExpanded);
            document.body.classList.toggle("nav-open", !isExpanded && window.innerWidth <= 768);
        });

        for (const link of navLinks) {
            link.addEventListener("click", closeNav);
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                closeNav();
            }
        });
    }

    // Nav dropdowns
    const navDropdownToggles = document.querySelectorAll(".nav-dropdown-toggle");

    for (const toggle of navDropdownToggles) {
        const menu = toggle.nextElementSibling;

        toggle.addEventListener("click", (event) => {
            event.stopPropagation();
            const isOpen = menu.classList.contains("is-open");

            // Close all other open dropdowns first
            document.querySelectorAll(".nav-dropdown-menu.is-open").forEach((m) => {
                m.classList.remove("is-open");
                m.previousElementSibling.setAttribute("aria-expanded", "false");
            });

            if (!isOpen) {
                menu.classList.add("is-open");
                toggle.setAttribute("aria-expanded", "true");
            }
        });
    }

    document.addEventListener("click", () => {
        document.querySelectorAll(".nav-dropdown-menu.is-open").forEach((m) => {
            m.classList.remove("is-open");
            m.previousElementSibling.setAttribute("aria-expanded", "false");
        });
    });

    // Social section heading
    document.querySelectorAll(".social-section .container").forEach((container) => {
        if (container.querySelector(".social-heading")) {
            return;
        }

        const heading = document.createElement("div");
        heading.className = "social-heading";
        heading.innerHTML = `
            <p class="social-kicker">Connect With Youth For Christ</p>
            <h2>Follow Us On Social Media</h2>
            <p class="social-sub">Stay inspired, updated, and connected across all our platforms.</p>
        `;

        container.prepend(heading);
    });

    // Gallery filter
    const galleryFilters = document.querySelectorAll(".gallery-filter");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const galleryLinks = document.querySelectorAll(".gallery-item-link");

    for (const btn of galleryFilters) {
        btn.addEventListener("click", () => {
            galleryFilters.forEach((b) => b.classList.remove("is-active"));
            btn.classList.add("is-active");

            const filter = btn.dataset.filter;
            for (const item of galleryItems) {
                if (filter === "all" || item.dataset.category === filter) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            }
        });
    }



    // Album page renderer in batches to keep initial page load fast.
    const albumGrid = document.querySelector("#album-grid");
    const loadMoreButton = document.querySelector("#album-load-more");
    const loadMoreWrap = document.querySelector(".album-load-wrap");
    const albumCount = document.querySelector("#album-photo-count");
    const albumHero = document.querySelector("#album-hero");
    const albumCategoryLabel = document.querySelector("#album-category-label");
    const albumTitle = document.querySelector("#album-title");
    const albumDescription = document.querySelector("#album-description");
    const albumYearFilter = document.querySelector("#album-year-filter");
    const albumMonthFilter = document.querySelector("#album-month-filter");

    if (albumGrid) {
        // Support both ?branch=x&category=y (new) and #branch=x&category=y (old)
        const searchParams = new URLSearchParams(window.location.search);
        const rawHash = window.location.hash.slice(1);
        const hashParams = new URLSearchParams(rawHash);
        const branchKey = (searchParams.get("branch") || hashParams.get("branch") || "witbank").toLowerCase();
        const selectedBranch = branchConfig[branchKey] || branchConfig.witbank;
        let category = (searchParams.get("category") || hashParams.get("category") || "").toLowerCase();
        if (!category && rawHash && rawHash.indexOf("=") === -1) {
            // Backward compatibility for old links like #outreach.
            category = rawHash.toLowerCase();
        }
        const selectedAlbum = albumConfig[category] || null;
        const isWitbankBranch = branchKey === "witbank";
        const albumPhotos = selectedAlbum ? (isWitbankBranch ? selectedAlbum.photos : []) : [];
        let lightbox = null;
        let lightboxImage = null;
        let lightboxCaption = null;
        let lightboxPrevButton = null;
        let lightboxNextButton = null;
        let currentLightboxIndex = -1;

        // Populate branch switcher dropdown
        const branchSwitcher = document.getElementById("branch-switcher");
        if (branchSwitcher) {
            Object.entries(branchConfig).forEach(([key, cfg]) => {
                const opt = document.createElement("option");
                opt.value = key;
                opt.textContent = cfg.label;
                if (key === branchKey) { opt.selected = true; }
                branchSwitcher.appendChild(opt);
            });
            branchSwitcher.addEventListener("change", () => {
                const newBranch = branchSwitcher.value;
                const dest = category
                    ? `atmosphere-album.html?branch=${newBranch}&category=${category}`
                    : `atmosphere-album.html?branch=${newBranch}`;
                window.location.href = dest;
            });
        }

        const renderBranchCategoryChooser = () => {
            albumGrid.innerHTML = "";

            const chooser = document.createElement("div");
            chooser.className = "gallery-grid";

            branchAlbumCategories.forEach((key) => {
                const cfg = albumConfig[key];
                if (!cfg) {
                    return;
                }

                const card = document.createElement("a");
                card.className = "gallery-item gallery-item-link";
                card.href = `atmosphere-album.html?branch=${branchKey}&category=${key}`;
                card.setAttribute("aria-label", `Open ${cfg.label} album for ${selectedBranch.label}`);

                const thumb = document.createElement("div");
                const bgClass = `${key}-bg`;
                thumb.className = `gallery-thumb ${bgClass}`;

                const overlay = document.createElement("div");
                overlay.className = "gallery-overlay";
                overlay.innerHTML = `
                    <span class="gallery-cat-label">${cfg.label}</span>
                    <p class="gallery-caption">${selectedBranch.label} branch category</p>
                    <span class="gallery-open-album">Open album</span>
                `;

                thumb.appendChild(overlay);
                card.appendChild(thumb);
                chooser.appendChild(card);
            });

            albumGrid.appendChild(chooser);
            if (loadMoreWrap) {
                loadMoreWrap.hidden = true;
            }
            if (albumYearFilter) {
                albumYearFilter.parentElement.style.display = "none";
            }
            if (albumCount) {
                albumCount.textContent = `${branchAlbumCategories.length} categories`;
            }
        };

        const getAlbumItems = () => Array.from(albumGrid.querySelectorAll(".album-item:not([hidden])"));

        const getCardImageSource = (card) => {
            const image = card.querySelector(".album-image");
            if (!image) {
                return "";
            }

            return image.dataset.src || image.currentSrc || image.src || "";
        };

        const getCardImageCaption = (card) => {
            const image = card.querySelector(".album-image");
            return image ? image.alt : "";
        };

        const updateLightboxSlide = () => {
            const items = getAlbumItems();
            if (!lightboxImage || !lightboxCaption || items.length === 0) {
                return;
            }

            if (currentLightboxIndex < 0) {
                currentLightboxIndex = 0;
            }

            if (currentLightboxIndex > items.length - 1) {
                currentLightboxIndex = items.length - 1;
            }

            const activeCard = items[currentLightboxIndex];
            const source = getCardImageSource(activeCard);
            const caption = getCardImageCaption(activeCard);

            lightboxImage.src = source;
            lightboxImage.alt = caption;
            lightboxCaption.textContent = caption;
        };

        const closeLightbox = () => {
            if (!lightbox) {
                return;
            }

            lightbox.hidden = true;
            document.body.style.overflow = "";
            currentLightboxIndex = -1;
        };

        const openLightboxAt = (index) => {
            const items = getAlbumItems();
            if (!lightbox || !lightboxImage || items.length === 0 || index < 0 || index >= items.length) {
                return;
            }

            currentLightboxIndex = index;
            updateLightboxSlide();
            lightbox.hidden = false;
            document.body.style.overflow = "hidden";
        };

        const moveLightbox = (step) => {
            const items = getAlbumItems();
            if (items.length === 0) {
                return;
            }

            currentLightboxIndex = (currentLightboxIndex + step + items.length) % items.length;
            updateLightboxSlide();
        };

        const ensureLightbox = () => {
            if (lightbox) {
                return;
            }

            lightbox = document.createElement("div");
            lightbox.className = "album-lightbox";
            lightbox.hidden = true;
            lightbox.innerHTML = `
                <button type="button" class="album-lb-close" aria-label="Close photo viewer">&times;</button>
                <button type="button" class="album-lb-prev" aria-label="Previous photo">&#8249;</button>
                <div class="album-lb-img-wrap">
                    <img class="album-lb-img" src="" alt="">
                    <p class="album-lb-caption"></p>
                </div>
                <button type="button" class="album-lb-next" aria-label="Next photo">&#8250;</button>
            `;

            lightboxImage = lightbox.querySelector(".album-lb-img");
            lightboxCaption = lightbox.querySelector(".album-lb-caption");
            lightboxPrevButton = lightbox.querySelector(".album-lb-prev");
            lightboxNextButton = lightbox.querySelector(".album-lb-next");

            const closeButton = lightbox.querySelector(".album-lb-close");

            if (closeButton) {
                closeButton.addEventListener("click", closeLightbox);
            }

            if (lightboxPrevButton) {
                lightboxPrevButton.addEventListener("click", () => moveLightbox(-1));
            }

            if (lightboxNextButton) {
                lightboxNextButton.addEventListener("click", () => moveLightbox(1));
            }

            lightbox.addEventListener("click", (event) => {
                if (event.target === lightbox) {
                    closeLightbox();
                }
            });

            document.addEventListener("keydown", (event) => {
                if (!lightbox || lightbox.hidden) {
                    return;
                }

                if (event.key === "Escape") {
                    closeLightbox();
                } else if (event.key === "ArrowLeft") {
                    moveLightbox(-1);
                } else if (event.key === "ArrowRight") {
                    moveLightbox(1);
                }
            });

            document.body.appendChild(lightbox);
        };

        if (!selectedAlbum) {
            if (albumCategoryLabel) {
                albumCategoryLabel.textContent = `${selectedBranch.label} Branch`;
            }
            if (albumTitle) {
                albumTitle.textContent = `${selectedBranch.label} Categories`;
            }
            if (albumDescription) {
                albumDescription.textContent = "Choose a category to view this branch's album photos.";
            }
            if (document.title) {
                document.title = `${selectedBranch.label} Albums | Youth For Christ International`;
            }

            renderBranchCategoryChooser();
            return;
        }

        if (albumCategoryLabel) {
            albumCategoryLabel.textContent = `${selectedBranch.label} • ${selectedAlbum.label}`;
        }

        if (albumTitle) {
            albumTitle.textContent = `${selectedBranch.label} ${selectedAlbum.title}`;
        }

        if (albumDescription) {
            albumDescription.textContent = isWitbankBranch
                ? selectedAlbum.description
                : `No uploaded photos yet for ${selectedBranch.label} in ${selectedAlbum.label}.`;
        }

        if (document.title) {
            document.title = `${selectedBranch.label} ${selectedAlbum.title} | Youth For Christ International`;
        }

        if (albumHero && albumPhotos.length > 0 && !albumHero.classList.contains('has-banner')) {
            const bannerPhoto = selectedAlbum.banner || albumPhotos[0];
            albumHero.style.backgroundImage = `linear-gradient(160deg, rgba(19, 11, 6, 0.65) 0%, rgba(42, 20, 9, 0.68) 55%, rgba(19, 11, 6, 0.72) 100%), url("${bannerPhoto}")`;
            albumHero.style.backgroundSize = "cover";
            albumHero.style.backgroundPosition = "center";
            albumHero.style.backgroundRepeat = "no-repeat";
        }

        window.albumStaticTotal = albumPhotos.length;
        window.albumFirebaseCount = 0;

        if (typeof window._fbRemaining !== "function") {
            window._fbRemaining = () => 0;
        }

        const updateAlbumCount = () => {
            if (albumCount) {
                const total = window.albumStaticTotal + window.albumFirebaseCount;
                const visible = albumGrid.querySelectorAll('.album-item:not([hidden])').length;
                albumCount.textContent = `${visible} / ${total} photos`;
            }
        };

        const updateYearFilterOptions = () => {
            if (!albumYearFilter) {
                return;
            }

            const previouslySelectedYear = albumYearFilter.value || "all";
            const yearSet = new Set();

            albumGrid.querySelectorAll(".album-item[data-year]").forEach((card) => {
                const cardYear = card.dataset.year;
                if (cardYear) {
                    yearSet.add(cardYear);
                }
            });

            const sortedYears = Array.from(yearSet).sort((a, b) => Number(b) - Number(a));
            albumYearFilter.innerHTML = '<option value="all">All years</option>';

            sortedYears.forEach((year) => {
                const option = document.createElement("option");
                option.value = year;
                option.textContent = year;
                albumYearFilter.appendChild(option);
            });

            albumYearFilter.value = sortedYears.includes(previouslySelectedYear) || previouslySelectedYear === "all"
                ? previouslySelectedYear
                : "all";
        };

        const batchSize = 6;
        let renderedCount = 0;
        let renderingAllForFilter = false;
        let filterDebounceTimer = null;
        const PLACEHOLDER_SRC = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3C/svg%3E";

        const scheduleIdleRender = (fn) => {
            if ("requestIdleCallback" in window) {
                requestIdleCallback(fn, { timeout: 400 });
            } else {
                setTimeout(fn, 0);
            }
        };

        const ensureAllStaticRendered = () => {
            if (renderingAllForFilter || renderedCount >= albumPhotos.length) {
                return;
            }

            renderingAllForFilter = true;
            const renderNext = () => {
                if (renderedCount < albumPhotos.length) {
                    renderBatch(true);
                    scheduleIdleRender(renderNext);
                } else {
                    renderingAllForFilter = false;
                    updateYearFilterOptions();
                    applyAlbumFilters();
                }
            };
            scheduleIdleRender(renderNext);
        };

        const applyAlbumFilters = () => {
            const selectedYear = albumYearFilter ? albumYearFilter.value : "all";
            const selectedMonth = albumMonthFilter ? albumMonthFilter.value : "all";
            const filterIsActive = selectedYear !== "all" || selectedMonth !== "all";

            if (filterIsActive && !renderingAllForFilter) {
                ensureAllStaticRendered();
            }

            albumGrid.querySelectorAll(".album-item").forEach((card) => {
                const cardYear = card.dataset.year || "";
                const cardMonth = card.dataset.month || "";
                const matchesYear = selectedYear === "all" || cardYear === selectedYear;
                const matchesMonth = selectedMonth === "all" || cardMonth === selectedMonth;
                card.hidden = !(matchesYear && matchesMonth);
            });

            if (loadMoreWrap) {
                const fbRemaining = window._fbRemaining();
                const staticRemaining = albumPhotos.length - renderedCount;
                loadMoreWrap.hidden = filterIsActive || (staticRemaining <= 0 && fbRemaining <= 0);
            }

            updateAlbumCount();
        };

        const debouncedApplyFilters = () => {
            clearTimeout(filterDebounceTimer);
            filterDebounceTimer = setTimeout(applyAlbumFilters, 120);
        };

        const getStaticPhotoDateParts = (index) => {
            // Group static album photos into month buckets for simple month/year filtering.
            const photoDate = new Date();
            photoDate.setDate(1);
            photoDate.setMonth(photoDate.getMonth() - Math.floor(index / 8));

            return {
                year: String(photoDate.getFullYear()),
                month: String(photoDate.getMonth() + 1)
            };
        };

        window.refreshAlbumFilters = () => {
            updateYearFilterOptions();
            applyAlbumFilters();
        };

        const supportsIntersectionObserver = "IntersectionObserver" in window;
        let lazyImageObserver = null;

        let virtualUnloadObserver = null;

        if (supportsIntersectionObserver) {
            lazyImageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const image = entry.target;
                    const deferredSrc = image.dataset.src;

                    if (deferredSrc) {
                        image.src = deferredSrc;
                        image.removeAttribute("data-src");
                    }

                    observer.unobserve(image);
                });
            }, {
                rootMargin: "150px 0px"
            });

            // Virtual unloading: reclaim memory for images scrolled far above viewport.
            virtualUnloadObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        return;
                    }
                    if (entry.boundingClientRect.bottom < -900) {
                        const image = entry.target.querySelector(".album-image");
                        if (image && image.src && !image.dataset.src && !image.src.startsWith("data:")) {
                            image.dataset.src = image.src;
                            image.src = PLACEHOLDER_SRC;
                            if (lazyImageObserver) {
                                lazyImageObserver.observe(image);
                            }
                        }
                    }
                });
            }, { rootMargin: "0px 0px -200px 0px" });
        }

        const renderBatch = (silent = false, count = batchSize) => {
            const fragment = document.createDocumentFragment();
            const endIndex = Math.min(renderedCount + count, albumPhotos.length);

            for (let index = renderedCount; index < endIndex; index += 1) {
                const photoPath = albumPhotos[index];

                const card = document.createElement("div");
                card.className = "album-item";
                card.setAttribute("aria-label", `${selectedAlbum.label} photo ${index + 1}`);
                card.setAttribute("role", "button");
                card.tabIndex = 0;
                const dateParts = getStaticPhotoDateParts(index);
                card.setAttribute("data-year", dateParts.year);
                card.setAttribute("data-month", dateParts.month);

                const image = document.createElement("img");
                image.className = "album-image";
                image.alt = `${selectedAlbum.label} photo ${index + 1}`;
                const shouldPrioritize = index < 4;
                image.loading = shouldPrioritize ? "eager" : "lazy";
                image.decoding = "async";
                image.fetchPriority = shouldPrioritize ? "high" : "low";
                image.width = 400;
                image.height = 400;

                if (shouldPrioritize || !lazyImageObserver) {
                    image.src = photoPath;
                } else {
                    image.src = PLACEHOLDER_SRC;
                    image.dataset.src = photoPath;
                    lazyImageObserver.observe(image);
                }

                const badge = document.createElement("span");
                badge.className = "album-index";
                badge.textContent = `#${index + 1}`;

                card.appendChild(image);
                card.appendChild(badge);
                fragment.appendChild(card);

                if (virtualUnloadObserver) {
                    virtualUnloadObserver.observe(card);
                }
            }

            albumGrid.appendChild(fragment);
            renderedCount = endIndex;

            if (!silent) {
                updateYearFilterOptions();
                applyAlbumFilters();
            }

            if (loadMoreButton) {
                const fbRemaining = window._fbRemaining();
                const staticRemaining = albumPhotos.length - renderedCount;
                const hasMore = staticRemaining > 0 || fbRemaining > 0;
                loadMoreButton.hidden = !hasMore;
                if (loadMoreWrap) {
                    loadMoreWrap.hidden = !hasMore;
                }
            }
        };

        // Expose static-render API so atmosphere-album.html can coordinate the
        // unified "6 total initially" limit across Firebase + static photos.
        window._renderStaticBatch = (count) => renderBatch(false, count != null ? count : batchSize);
        window._staticRemaining   = () => albumPhotos.length - renderedCount;

        // Deferred init: wait up to 800 ms for Firebase to signal how many slots
        // it already used, then render the remainder as static photos.
        let _staticInitDone = false;
        window._initStaticAlbum = (fbSlotsUsed) => {
            if (_staticInitDone) return;
            _staticInitDone = true;
            const slots = Math.max(0, batchSize - (fbSlotsUsed || 0));
            if (slots > 0 && albumPhotos.length > 0) {
                renderBatch(false, slots);
            }
        };
        // Fallback: if Firebase never calls in, render static on its own.
        setTimeout(() => window._initStaticAlbum(0), 800);

        ensureLightbox();

        if (albumYearFilter) {
            albumYearFilter.addEventListener("change", debouncedApplyFilters);
        }

        if (albumMonthFilter) {
            albumMonthFilter.addEventListener("change", debouncedApplyFilters);
        }

        albumGrid.addEventListener("click", (event) => {
            const card = event.target.closest(".album-item");
            if (!card || !albumGrid.contains(card)) {
                return;
            }

            const items = getAlbumItems();
            openLightboxAt(items.indexOf(card));
        });

        albumGrid.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") {
                return;
            }

            const card = event.target.closest(".album-item");
            if (!card || !albumGrid.contains(card)) {
                return;
            }

            event.preventDefault();
            const items = getAlbumItems();
            openLightboxAt(items.indexOf(card));
        });

        // Load More for static: only fires when Firebase coordinator is absent.
        if (loadMoreButton && !loadMoreButton._fbHandlerActive) {
            loadMoreButton.addEventListener("click", () => {
                if (!loadMoreButton._fbHandlerActive) {
                    renderBatch();
                }
            });
        }
    }

    // Merchandise filter
    const merchFilters = document.querySelectorAll(".merch-filter");
    const merchCards = document.querySelectorAll(".merch-product-card");

    for (const btn of merchFilters) {
        btn.addEventListener("click", () => {
            merchFilters.forEach((b) => b.classList.remove("is-active"));
            btn.classList.add("is-active");

            const filter = btn.dataset.filter;

            for (const card of merchCards) {
                if (filter === "all" || card.dataset.category === filter) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            }
        });
    }

});