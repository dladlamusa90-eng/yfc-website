document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("is-ready");

    const homeHeroPhotos = [
        "assets/images/home 1.jpg",
        "assets/images/home 2.jpg",
        "assets/images/home 3.jpg",
        "assets/images/home 4.jpg",
        "assets/images/home 5.jpg",
        "assets/images/home 7.jpg",
        "assets/images/home 8.jpg",
        "assets/images/home 9.jpg",
        "assets/images/home 10.jpg",
        "assets/images/home 11.jpg",
        "assets/images/home 12.jpg"
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

    const outreachPhotos = Array.from({ length: 43 }, (_, index) => `assets/images/outreach ${index + 1}.jpg`);
    const jrtPhotos = Array.from({ length: 15 }, (_, index) => `assets/images/jrt ${index + 1}.JPG`);
    const tourPhotos = Array.from({ length: 18 }, (_, index) => `assets/images/tour ${index + 1}.jpg`);
    const leadershipPhotos = Array.from({ length: 4 }, (_, index) => `assets/images/leadership ${index + 1}.jpg`);
    const yfcwUppercasePhotoNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 22, 23, 24, 25, 26, 27]);
    const yfcwPhotos = Array.from({ length: 30 }, (_, index) => {
        const photoNumber = index + 1;
        const extension = yfcwUppercasePhotoNumbers.has(photoNumber) ? "JPG" : "jpg";

        return `assets/images/yfcw (${photoNumber}).${extension}`;
    });
    const moreUppercasePhotoNumbers = new Set([2, 3, 4, 5, 6, 7, 8, 15, 46, 49, 50, 52]);
    const morePhotos = Array.from({ length: 52 }, (_, index) => {
        const photoNumber = index + 1;
        const extension = moreUppercasePhotoNumbers.has(photoNumber) ? "JPG" : "jpg";

        return `assets/images/other 1 (${photoNumber}).${extension}`;
    });

    const defaultAlbumPhoto = "assets/images/home.jpg";
    const albumConfig = {
        outreach: {
            label: "Outreach",
            title: "Outreach Album",
            description: "Outreach moments that reflect compassion, service, and faith in action.",
            banner: "assets/images/outreach 33.jpg",
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
            banner: "assets/images/leadership 1.jpg",
            photos: leadershipPhotos
        },
        yfcw: {
            label: "Youth For Christ Worship (YFCW)",
            title: "Youth For Christ Worship (YFCW) Album",
            description: "Powerful moments of worship, praise, and spiritual encounter with YFC youth.",
            banner: "assets/images/yfcw (1).JPG",
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
            banner: "assets/images/other 1 (1).jpg",
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

    // Video Programs GIF controls
    const mediaCards = document.querySelectorAll(".media-card");
    const mediaGifs = document.querySelectorAll(".media-gif");

    const buildGifPoster = (gifSource) => new Promise((resolve) => {
        const probeImage = new Image();
        probeImage.onload = () => {
            try {
                const canvas = document.createElement("canvas");
                canvas.width = probeImage.naturalWidth || probeImage.width;
                canvas.height = probeImage.naturalHeight || probeImage.height;

                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    resolve(null);
                    return;
                }

                // Draw the loaded frame and use it as a static thumbnail.
                ctx.drawImage(probeImage, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", 0.9));
            } catch {
                resolve(null);
            }
        };
        probeImage.onerror = () => resolve(null);
        probeImage.src = gifSource;
    });

    const initializeMediaGifPosters = async () => {
        await Promise.all(Array.from(mediaGifs, async (image) => {
            const gifSource = image.dataset.gifSrc;
            if (!gifSource) {
                return;
            }

            const generatedPoster = await buildGifPoster(gifSource);
            if (generatedPoster) {
                image.dataset.posterSrc = generatedPoster;
                image.src = generatedPoster;
            } else if (image.dataset.posterSrc) {
                image.src = image.dataset.posterSrc;
            }
        }));
    };

    const startGif = (image) => {
        const gifSource = image.dataset.gifSrc;
        if (gifSource && image.src.indexOf(gifSource) === -1) {
            image.src = gifSource;
        }
    };

    const stopGif = (image) => {
        const posterSource = image.dataset.posterSrc;
        if (posterSource && image.src.indexOf(posterSource) === -1) {
            image.src = posterSource;
        }
    };

    const stopAllGifs = () => {
        mediaGifs.forEach((image) => stopGif(image));
    };

    if (mediaCards.length > 0) {
        initializeMediaGifPosters();

        mediaCards.forEach((card) => {
            const image = card.querySelector(".media-gif");
            if (!image) {
                return;
            }

            card.addEventListener("mouseenter", () => {
                if (window.matchMedia("(hover: hover)").matches) {
                    startGif(image);
                }
            });

            card.addEventListener("mouseleave", () => {
                if (window.matchMedia("(hover: hover)").matches) {
                    stopGif(image);
                }
            });

            card.addEventListener("focusin", () => {
                if (window.matchMedia("(hover: hover)").matches) {
                    startGif(image);
                }
            });

            card.addEventListener("focusout", () => {
                if (window.matchMedia("(hover: hover)").matches) {
                    stopGif(image);
                }
            });
        });

        const mobileMedia = window.matchMedia("(max-width: 768px)");
        if (mobileMedia.matches && "IntersectionObserver" in window) {
            const cardRatios = new Map();

            const activateMostVisibleCard = () => {
                let bestCard = null;
                let bestRatio = 0;

                cardRatios.forEach((ratio, card) => {
                    if (ratio > bestRatio) {
                        bestRatio = ratio;
                        bestCard = card;
                    }
                });

                stopAllGifs();

                if (bestCard && bestRatio >= 0.45) {
                    const bestImage = bestCard.querySelector(".media-gif");
                    if (bestImage) {
                        startGif(bestImage);
                    }
                }
            };

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        cardRatios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
                    });
                    activateMostVisibleCard();
                },
                {
                    threshold: [0, 0.25, 0.45, 0.6, 0.8, 1]
                }
            );

            mediaCards.forEach((card) => observer.observe(card));
        }
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