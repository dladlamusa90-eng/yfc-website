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

            if (filter !== "all") {
                window.location.href = `atmosphere-album.html#${filter}`;
                return;
            }

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

    if (albumGrid) {
        const category = (window.location.hash.slice(1)) || "atmosphere";
        const selectedAlbum = albumConfig[category] || albumConfig.atmosphere;
        const albumPhotos = selectedAlbum.photos;

        if (albumCategoryLabel) {
            albumCategoryLabel.textContent = selectedAlbum.label;
        }

        if (albumTitle) {
            albumTitle.textContent = selectedAlbum.title;
        }

        if (albumDescription) {
            albumDescription.textContent = selectedAlbum.description;
        }

        if (document.title) {
            document.title = `${selectedAlbum.title} | Youth For Christ International`;
        }

        if (albumHero && albumPhotos.length > 0) {
            const bannerPhoto = selectedAlbum.banner || albumPhotos[0];
            albumHero.style.backgroundImage = `linear-gradient(160deg, rgba(19, 11, 6, 0.65) 0%, rgba(42, 20, 9, 0.68) 55%, rgba(19, 11, 6, 0.72) 100%), url("${bannerPhoto}")`;
            albumHero.style.backgroundSize = "cover";
            albumHero.style.backgroundPosition = "center";
            albumHero.style.backgroundRepeat = "no-repeat";
        }

        window.albumStaticTotal = albumPhotos.length;
        window.albumFirebaseCount = 0;

        const updateAlbumCount = () => {
            if (albumCount) {
                const total = window.albumStaticTotal + window.albumFirebaseCount;
                albumCount.textContent = `${total} photos`;
            }
        };

        const batchSize = window.matchMedia("(max-width: 768px)").matches ? 8 : 12;
        let renderedCount = 0;

        const supportsIntersectionObserver = "IntersectionObserver" in window;
        let lazyImageObserver = null;

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
                rootMargin: "250px 0px"
            });
        }

        const renderBatch = () => {
            const fragment = document.createDocumentFragment();
            const endIndex = Math.min(renderedCount + batchSize, albumPhotos.length);

            for (let index = renderedCount; index < endIndex; index += 1) {
                const photoPath = albumPhotos[index];

                const card = document.createElement("div");
                card.className = "album-item";
                card.setAttribute("aria-label", `${selectedAlbum.label} photo ${index + 1}`);

                const image = document.createElement("img");
                image.className = "album-image";
                image.alt = `${selectedAlbum.label} photo ${index + 1}`;
                const shouldPrioritize = index < 4;
                image.loading = shouldPrioritize ? "eager" : "lazy";
                image.decoding = "async";
                image.fetchPriority = shouldPrioritize ? "high" : "low";
                image.width = 1200;
                image.height = 900;

                if (shouldPrioritize || !lazyImageObserver) {
                    image.src = photoPath;
                } else {
                    // Keep far-off images deferred until close to the viewport.
                    image.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3C/svg%3E";
                    image.dataset.src = photoPath;
                    lazyImageObserver.observe(image);
                }

                const badge = document.createElement("span");
                badge.className = "album-index";
                badge.textContent = `#${index + 1}`;

                card.appendChild(image);
                card.appendChild(badge);
                fragment.appendChild(card);
            }

            albumGrid.appendChild(fragment);
            renderedCount = endIndex;

            updateAlbumCount();

            if (loadMoreButton && renderedCount >= albumPhotos.length) {
                loadMoreButton.hidden = true;
                if (loadMoreWrap) {
                    loadMoreWrap.hidden = true;
                }
            }
        };

        renderBatch();

        if (loadMoreButton) {
            loadMoreButton.addEventListener("click", renderBatch);
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