document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("is-ready");

    const homeHeroPhotos = [
        "assets/images/home 1.jpg",
        "assets/images/home 2.jpg",
        "assets/images/home 3.jpg",
        "assets/images/home 4.jpg",
        "assets/images/home 5.jpg",
        "assets/images/home 6.jpg",
        "assets/images/home 7.jpg",
        "assets/images/home 8.jpg",
        "assets/images/home 9.jpg",
        "assets/images/home 10.jpg"
    ];

    const atmospherePhotos = [
        "assets/images/atmosphere 1.jpg",
        "assets/images/atmosphere 2.jpg",
        "assets/images/atmosphere 3.jpg",
        "assets/images/atmosphere 4.jpg",
        "assets/images/atmosphere 5.jpg",
        "assets/images/atmosphere 6.jpg",
        "assets/images/atmosphere 7.jpg",
        "assets/images/atmosphere 8.jpg",
        "assets/images/atmosphere 9.jpg",
        "assets/images/atmosphere 10.jpg",
        "assets/images/atmosphere 11.jpg",
        "assets/images/atmosphere 12.jpg",
        "assets/images/atmosphere 13.jpg",
        "assets/images/atmosphere 14.jpg",
        "assets/images/atmosphere 15.jpg",
        "assets/images/atmosphere 16.jpg",
        "assets/images/atmosphere 17.jpg",
        "assets/images/atmosphere 18.jpg",
        "assets/images/atmosphere 19.jpg",
        "assets/images/atmosphere 20.jpg",
        "assets/images/atmosphere 21.jpg",
        "assets/images/atmosphere 22.jpg",
        "assets/images/atmosphere 23.jpg",
        "assets/images/atmosphere 24.jpg",
        "assets/images/atmosphere 25.jpg",
        "assets/images/atmosphere 26.jpg",
        "assets/images/atmosphere 27.jpg",
        "assets/images/atmosphere 28.jpg",
        "assets/images/atmosphere 29.jpg",
        "assets/images/atmosphere 30.jpg",
        "assets/images/atmosphere 31.jpg",
        "assets/images/atmosphere 32.jpg",
        "assets/images/atmosphere 33.jpg",
        "assets/images/atmosphere 34.jpg",
        "assets/images/atmosphere 35.jpg"
    ];

    const defaultAlbumPhoto = "assets/images/home.jpg";
    const albumConfig = {
        outreach: {
            label: "Outreach",
            title: "Outreach Album",
            description: "Outreach moments that reflect compassion, service, and faith in action.",
            photos: [defaultAlbumPhoto]
        },
        jrt: {
            label: "Jesus Roundtable",
            title: "Jesus Roundtable Album",
            description: "Roundtable sessions and meaningful conversations centered on Christ.",
            photos: [defaultAlbumPhoto]
        },
        tours: {
            label: "Tours",
            title: "Tours Album",
            description: "Memories from ministry trips, visits, and shared journeys.",
            photos: [defaultAlbumPhoto]
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
            photos: [defaultAlbumPhoto]
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
            photos: [defaultAlbumPhoto]
        }
    };

    const navToggle = document.querySelector(".nav-toggle");
    const siteNav = document.querySelector(".site-nav");
    const navLinks = document.querySelectorAll(".site-nav a");
    const heroSection = document.querySelector(".hero-section");

    if (heroSection) {
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        const nextHeroIndex = randomBuffer[0] % homeHeroPhotos.length;

        heroSection.style.backgroundImage = `url("${homeHeroPhotos[nextHeroIndex]}")`;
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

    // Gallery filter
    const galleryFilters = document.querySelectorAll(".gallery-filter");
    const galleryItems = document.querySelectorAll(".gallery-item");

    for (const btn of galleryFilters) {
        btn.addEventListener("click", () => {
            galleryFilters.forEach((b) => b.classList.remove("is-active"));
            btn.classList.add("is-active");

            const filter = btn.dataset.filter;

            if (filter !== "all") {
                window.location.href = `atmosphere-album.html?category=${filter}`;
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

    const previewPhotos = atmospherePhotos.slice(0, 8);

    // Auto-advancing photo preview on the Atmosphere of Faith card.
    const atmospherePreview = document.querySelector("[data-atmosphere-preview='true']");
    if (atmospherePreview) {
        let previewIndex = 0;
        atmospherePreview.classList.add("is-live-photo");

        const setPreview = () => {
            atmospherePreview.style.backgroundImage = `url("${previewPhotos[previewIndex]}")`;
        };

        setPreview();
        setInterval(() => {
            previewIndex = (previewIndex + 1) % previewPhotos.length;
            setPreview();
        }, 3200);
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
        const params = new URLSearchParams(window.location.search);
        const category = params.get("category") || "atmosphere";
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
            albumHero.style.backgroundImage = `linear-gradient(160deg, rgba(19, 11, 6, 0.65) 0%, rgba(42, 20, 9, 0.68) 55%, rgba(19, 11, 6, 0.72) 100%), url("${albumPhotos[0]}")`;
            albumHero.style.backgroundSize = "cover";
            albumHero.style.backgroundPosition = "center";
            albumHero.style.backgroundRepeat = "no-repeat";
        }

        const batchSize = 9;
        let renderedCount = 0;

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
                image.src = photoPath;
                image.alt = `${selectedAlbum.label} photo ${index + 1}`;
                image.loading = "lazy";
                image.decoding = "async";
                image.width = 1200;
                image.height = 900;

                const badge = document.createElement("span");
                badge.className = "album-index";
                badge.textContent = `#${index + 1}`;

                card.appendChild(image);
                card.appendChild(badge);
                fragment.appendChild(card);
            }

            albumGrid.appendChild(fragment);
            renderedCount = endIndex;

            if (albumCount) {
                albumCount.textContent = `${renderedCount} / ${albumPhotos.length} photos`;
            }

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
});