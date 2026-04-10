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

    // Daily Juice creator (programs/daily-juice.html)
    const dailyJuiceForm = document.querySelector("#daily-juice-form");
    if (dailyJuiceForm) {
        const titleInput = document.querySelector("#dj-title");
        const themeVerseInput = document.querySelector("#dj-theme-verse");
        const messageInput = document.querySelector("#dj-message");
        const furtherVerseInput = document.querySelector("#dj-further-verse");
        const photoInput = document.querySelector("#dj-photo");
        const photoFrame = document.querySelector("#dj-photo-frame");
        const photoPreview = document.querySelector("#dj-photo-preview");
        const photoPlaceholder = document.querySelector("#dj-photo-placeholder");
        const openBibleButton = document.querySelector("#dj-open-bible");
        const addReferenceButton = document.querySelector("#dj-add-reference");
        const generateButton = document.querySelector("#dj-generate-button");
        const generatingStatus = document.querySelector("#dj-generating");
        const resultWrap = document.querySelector("#daily-juice-result");
        const outputImage = document.querySelector("#dj-output");
        const downloadLink = document.querySelector("#dj-download");

        const titleLimit = document.querySelector("#dj-title-limit");
        const themeLimit = document.querySelector("#dj-theme-limit");
        const messageLimit = document.querySelector("#dj-message-limit");
        const furtherLimit = document.querySelector("#dj-further-limit");

        const WORD_LIMITS = {
            title: 8,
            themeVerse: null,
            message: 200,
            furtherVerse: 28
        };

        let uploadedPortrait = null;
        let previewOffsetX = 0;
        let previewOffsetY = 0;
        let previewScale = 1.35;
        const MIN_SCALE = 1;
        const MAX_SCALE = 2.8;
        let draggingPointerId = null;
        let dragStartX = 0;
        let dragStartY = 0;
        let dragOriginOffsetX = 0;
        let dragOriginOffsetY = 0;
        const activePointers = new Map();
        let pinchStartDistance = 0;
        let pinchStartScale = previewScale;
        const templatePath = "../assets/images/Fri.jpg";
        let templateImagePromise = null;

        const getCurrentZoom = () => previewScale;

        const loadTemplateImage = () => {
            if (templateImagePromise) {
                return templateImagePromise;
            }

            templateImagePromise = new Promise((resolve, reject) => {
                const image = new Image();
                image.onload = () => resolve(image);
                image.onerror = () => reject(new Error("Unable to load template image"));
                image.src = templatePath;
            });

            return templateImagePromise;
        };

        const getPhotoBounds = () => {
            if (!uploadedPortrait || !photoFrame) {
                return { maxX: 0, maxY: 0 };
            }

            const frameWidth = photoFrame.clientWidth;
            const frameHeight = photoFrame.clientHeight;
            if (!frameWidth || !frameHeight) {
                return { maxX: 0, maxY: 0 };
            }

            const zoom = getCurrentZoom();
            const baseScale = Math.max(frameWidth / uploadedPortrait.width, frameHeight / uploadedPortrait.height);
            const drawWidth = uploadedPortrait.width * baseScale * zoom;
            const drawHeight = uploadedPortrait.height * baseScale * zoom;

            return {
                maxX: Math.max((drawWidth - frameWidth) / 2, 0),
                maxY: Math.max((drawHeight - frameHeight) / 2, 0)
            };
        };

        const clampOffsets = () => {
            const bounds = getPhotoBounds();
            previewOffsetX = Math.max(-bounds.maxX, Math.min(bounds.maxX, previewOffsetX));
            previewOffsetY = Math.max(-bounds.maxY, Math.min(bounds.maxY, previewOffsetY));
        };

        const clampScale = (value) => Math.max(MIN_SCALE, Math.min(MAX_SCALE, value));

        const getPointerDistance = () => {
            const pointers = Array.from(activePointers.values());
            if (pointers.length < 2) {
                return 0;
            }

            const dx = pointers[1].x - pointers[0].x;
            const dy = pointers[1].y - pointers[0].y;
            return Math.hypot(dx, dy);
        };

        const updatePhotoFramePreview = () => {
            if (!photoPreview) {
                return;
            }

            if (!uploadedPortrait) {
                photoPreview.hidden = true;
                if (photoPlaceholder) {
                    photoPlaceholder.hidden = false;
                }
                return;
            }

            clampOffsets();
            const zoom = getCurrentZoom();

            photoPreview.hidden = false;
            photoPreview.style.transform = `translate(${previewOffsetX}px, ${previewOffsetY}px) scale(${zoom})`;
            if (photoPlaceholder) {
                photoPlaceholder.hidden = true;
            }
        };

        const countWords = (value) => value.trim().split(/\s+/).filter(Boolean).length;

        const updateLimitLabel = (input, limit, labelNode) => {
            if (limit === null) {
                labelNode.textContent = "No word limit";
                labelNode.style.color = "";
                return;
            }

            const words = countWords(input.value);
            const remaining = Math.max(limit - words, 0);
            labelNode.textContent = `${remaining} words left`;
            labelNode.style.color = words > limit ? "#dc2626" : "";
        };

        const wrapText = (ctx, text, x, y, maxWidth, lineHeight, maxLines) => {
            const words = text.split(/\s+/).filter(Boolean);
            let line = "";
            let row = 0;
            let cursorY = y;

            for (const word of words) {
                const testLine = line ? `${line} ${word}` : word;
                const testWidth = ctx.measureText(testLine).width;

                if (testWidth > maxWidth && line) {
                    ctx.fillText(line, x, cursorY);
                    cursorY += lineHeight;
                    row += 1;
                    line = word;

                    if (row >= maxLines - 1) {
                        break;
                    }
                } else {
                    line = testLine;
                }
            }

            if (row < maxLines && line) {
                ctx.fillText(line, x, cursorY);
                cursorY += lineHeight;
            }

            return cursorY;
        };

        const renderDailyJuiceJpg = async () => {
            const templateImage = await loadTemplateImage().catch(() => null);
            const canvas = document.createElement("canvas");
            canvas.width = templateImage ? templateImage.width : 2480;
            canvas.height = templateImage ? templateImage.height : 3508;

            const ctx = canvas.getContext("2d");
            if (!ctx) {
                return null;
            }

            if (templateImage) {
                ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);
            } else {
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, "#fef7f2");
                gradient.addColorStop(1, "#fff2e6");
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            const panelX = canvas.width * 0.07;
            const panelY = canvas.height * 0.17;
            const panelWidth = canvas.width * 0.86;
            const panelHeight = canvas.height * 0.72;
            const panelRadius = Math.round(canvas.width * 0.02);

            const drawRoundedPanelPath = (x, y, width, height, radius) => {
                if (typeof ctx.roundRect === "function") {
                    ctx.beginPath();
                    ctx.roundRect(x, y, width, height, radius);
                    return;
                }

                const r = Math.min(radius, width / 2, height / 2);
                ctx.beginPath();
                ctx.moveTo(x + r, y);
                ctx.lineTo(x + width - r, y);
                ctx.arcTo(x + width, y, x + width, y + r, r);
                ctx.lineTo(x + width, y + height - r);
                ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
                ctx.lineTo(x + r, y + height);
                ctx.arcTo(x, y + height, x, y + height - r, r);
                ctx.lineTo(x, y + r);
                ctx.arcTo(x, y, x + r, y, r);
                ctx.closePath();
            };

            ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
            drawRoundedPanelPath(panelX, panelY, panelWidth, panelHeight, panelRadius);
            ctx.fill();

            ctx.strokeStyle = "rgba(239, 71, 35, 0.45)";
            ctx.lineWidth = Math.max(2, canvas.width * 0.0012);
            ctx.stroke();

            const textX = panelX + panelWidth * 0.055;
            const textMaxWidth = panelWidth * 0.58;
            const headingGap = canvas.height * 0.013;

            ctx.fillStyle = "#ef4723";
            ctx.font = `700 ${Math.round(canvas.width * 0.02)}px Inter, sans-serif`;
            ctx.fillText("Daily Juice", textX, panelY + panelHeight * 0.09);

            ctx.fillStyle = "#1f2734";
            ctx.font = `800 ${Math.round(canvas.width * 0.027)}px Inter, sans-serif`;
            let cursorY = wrapText(ctx, titleInput.value.trim(), textX, panelY + panelHeight * 0.16, textMaxWidth, canvas.height * 0.03, 3);

            ctx.fillStyle = "#ef4723";
            ctx.font = `700 ${Math.round(canvas.width * 0.014)}px Inter, sans-serif`;
            cursorY = wrapText(ctx, `Theme Verse: ${themeVerseInput.value.trim()}`, textX, cursorY + headingGap, textMaxWidth, canvas.height * 0.016, 4);

            ctx.fillStyle = "#374151";
            ctx.font = `500 ${Math.round(canvas.width * 0.012)}px Inter, sans-serif`;
            cursorY = wrapText(ctx, messageInput.value.trim(), textX, cursorY + headingGap, textMaxWidth, canvas.height * 0.017, 16);

            ctx.fillStyle = "#7c2d12";
            ctx.font = `700 ${Math.round(canvas.width * 0.013)}px Inter, sans-serif`;
            cursorY = wrapText(ctx, `Further Study: ${furtherVerseInput.value.trim()}`, textX, cursorY + headingGap, textMaxWidth, canvas.height * 0.016, 6);

            const photoWidth = panelWidth * 0.29;
            const photoHeight = panelHeight * 0.62;
            const photoX = panelX + panelWidth - photoWidth - panelWidth * 0.06;
            const photoY = panelY + panelHeight * 0.13;

            ctx.fillStyle = "#ffffff";
            ctx.fillRect(photoX - 12, photoY - 12, photoWidth + 24, photoHeight + 24);
            ctx.strokeStyle = "rgba(239, 71, 35, 0.35)";
            ctx.lineWidth = Math.max(2, canvas.width * 0.0012);
            ctx.strokeRect(photoX - 12, photoY - 12, photoWidth + 24, photoHeight + 24);

            ctx.save();
            ctx.beginPath();
            ctx.rect(photoX, photoY, photoWidth, photoHeight);
            ctx.clip();

            if (uploadedPortrait) {
                const zoom = getCurrentZoom();
                clampOffsets();
                const offsetY = previewOffsetY;
                const offsetX = previewOffsetX;

                const baseScale = Math.max(photoWidth / uploadedPortrait.width, photoHeight / uploadedPortrait.height);
                const drawWidth = uploadedPortrait.width * baseScale * zoom;
                const drawHeight = uploadedPortrait.height * baseScale * zoom;
                const drawX = photoX + (photoWidth - drawWidth) / 2 + offsetX;
                const drawY = photoY + (photoHeight - drawHeight) / 2 + offsetY;

                ctx.drawImage(uploadedPortrait, drawX, drawY, drawWidth, drawHeight);
            } else {
                ctx.fillStyle = "#fde8d9";
                ctx.fillRect(photoX, photoY, photoWidth, photoHeight);
                ctx.fillStyle = "#9a3412";
                ctx.font = "600 24px Inter, sans-serif";
                ctx.fillText("Upload a photo", photoX + 76, photoY + 255);
            }

            ctx.restore();

            ctx.fillStyle = "#1f2734";
            ctx.font = `600 ${Math.round(canvas.width * 0.011)}px Inter, sans-serif`;
            ctx.fillText("Youth For Christ International", panelX + panelWidth * 0.055, panelY + panelHeight - panelHeight * 0.08);

            ctx.fillStyle = "#6b7280";
            ctx.font = `500 ${Math.round(canvas.width * 0.009)}px Inter, sans-serif`;
            ctx.fillText(`Generated: ${new Date().toLocaleDateString()}`, panelX + panelWidth * 0.055, panelY + panelHeight - panelHeight * 0.05);

            return canvas.toDataURL("image/jpeg", 0.92);
        };

        const validateLimits = () => {
            const checks = [
                { input: titleInput, limit: WORD_LIMITS.title, label: "Title" },
                { input: themeVerseInput, limit: WORD_LIMITS.themeVerse, label: "Theme Verse" },
                { input: messageInput, limit: WORD_LIMITS.message, label: "Main Message" },
                { input: furtherVerseInput, limit: WORD_LIMITS.furtherVerse, label: "Further Study Verse" }
            ];

            for (const check of checks) {
                if (check.limit === null) {
                    continue;
                }

                const total = countWords(check.input.value);
                if (total > check.limit) {
                    window.alert(`${check.label} exceeds the ${check.limit}-word limit.`);
                    check.input.focus();
                    return false;
                }
            }

            return true;
        };

        const syncLimitDisplays = () => {
            updateLimitLabel(titleInput, WORD_LIMITS.title, titleLimit);
            updateLimitLabel(themeVerseInput, WORD_LIMITS.themeVerse, themeLimit);
            updateLimitLabel(messageInput, WORD_LIMITS.message, messageLimit);
            updateLimitLabel(furtherVerseInput, WORD_LIMITS.furtherVerse, furtherLimit);
        };

        [titleInput, themeVerseInput, messageInput, furtherVerseInput].forEach((input) => {
            input.addEventListener("input", syncLimitDisplays);
        });

        photoInput.addEventListener("change", (event) => {
            const file = event.target.files && event.target.files[0];
            if (!file) {
                uploadedPortrait = null;
                updatePhotoFramePreview();
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                const image = new Image();
                image.onload = () => {
                    uploadedPortrait = image;
                    previewOffsetX = 0;
                    previewOffsetY = 0;
                    previewScale = 1.35;
                    photoPreview.src = String(reader.result);
                    updatePhotoFramePreview();
                };
                image.src = String(reader.result);
            };
            reader.readAsDataURL(file);
        });

        const beginDrag = (event) => {
            if (!uploadedPortrait || !photoFrame) {
                return;
            }

            activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
            photoFrame.setPointerCapture(event.pointerId);

            if (activePointers.size === 1) {
                draggingPointerId = event.pointerId;
                dragStartX = event.clientX;
                dragStartY = event.clientY;
                dragOriginOffsetX = previewOffsetX;
                dragOriginOffsetY = previewOffsetY;
                photoFrame.classList.add("is-dragging");
                return;
            }

            if (activePointers.size === 2) {
                draggingPointerId = null;
                pinchStartDistance = getPointerDistance();
                pinchStartScale = previewScale;
            }
        };

        const handleDragMove = (event) => {
            if (!activePointers.has(event.pointerId)) {
                return;
            }

            activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

            if (activePointers.size >= 2) {
                const currentDistance = getPointerDistance();
                if (pinchStartDistance > 0 && currentDistance > 0) {
                    previewScale = clampScale(pinchStartScale * (currentDistance / pinchStartDistance));
                    updatePhotoFramePreview();
                }
                return;
            }

            if (draggingPointerId === null || event.pointerId !== draggingPointerId) {
                return;
            }

            previewOffsetX = dragOriginOffsetX + (event.clientX - dragStartX);
            previewOffsetY = dragOriginOffsetY + (event.clientY - dragStartY);
            updatePhotoFramePreview();
        };

        const endDrag = (event) => {
            if (!activePointers.has(event.pointerId)) {
                return;
            }

            activePointers.delete(event.pointerId);

            if (photoFrame) {
                photoFrame.classList.remove("is-dragging");
                try {
                    photoFrame.releasePointerCapture(event.pointerId);
                } catch {
                    // ignore release errors if pointer capture is already released
                }
            }

            if (activePointers.size === 1) {
                const [pointerId, pointerData] = Array.from(activePointers.entries())[0];
                draggingPointerId = pointerId;
                dragStartX = pointerData.x;
                dragStartY = pointerData.y;
                dragOriginOffsetX = previewOffsetX;
                dragOriginOffsetY = previewOffsetY;
                if (photoFrame) {
                    photoFrame.classList.add("is-dragging");
                }
            } else {
                draggingPointerId = null;
            }
        };

        if (photoFrame) {
            photoFrame.addEventListener("pointerdown", beginDrag);
            photoFrame.addEventListener("pointermove", handleDragMove);
            photoFrame.addEventListener("pointerup", endDrag);
            photoFrame.addEventListener("pointercancel", endDrag);
            photoFrame.addEventListener("pointerleave", endDrag);
            photoFrame.addEventListener("wheel", (event) => {
                if (!uploadedPortrait) {
                    return;
                }

                event.preventDefault();
                const delta = event.deltaY < 0 ? 0.06 : -0.06;
                previewScale = clampScale(previewScale + delta);
                updatePhotoFramePreview();
            }, { passive: false });
        }

        openBibleButton.addEventListener("click", () => {
            window.open(
                "https://www.biblegateway.com/quicksearch/?quicksearch=&version=NIV",
                "dailyJuiceBible",
                "width=1100,height=760"
            );
        });

        addReferenceButton.addEventListener("click", () => {
            const pickedReference = window.prompt("Add verse reference (example: James 1:2-4):", "");
            if (!pickedReference) {
                return;
            }

            const currentValue = furtherVerseInput.value.trim();
            furtherVerseInput.value = currentValue ? `${currentValue}, ${pickedReference.trim()}` : pickedReference.trim();
            syncLimitDisplays();
        });

        dailyJuiceForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            if (!dailyJuiceForm.reportValidity()) {
                return;
            }

            if (!validateLimits()) {
                return;
            }

            if (generateButton) {
                generateButton.disabled = true;
            }
            if (generatingStatus) {
                generatingStatus.hidden = false;
            }

            try {
                const jpegData = await renderDailyJuiceJpg();
                if (!jpegData) {
                    window.alert("Unable to generate JPG right now. Please try again.");
                    return;
                }

                outputImage.src = jpegData;
                downloadLink.href = jpegData;
                resultWrap.hidden = false;
            } catch {
                window.alert("Something went wrong while generating your Daily Juice JPG.");
            } finally {
                if (generateButton) {
                    generateButton.disabled = false;
                }
                if (generatingStatus) {
                    generatingStatus.hidden = true;
                }
            }
        });

        syncLimitDisplays();
        updatePhotoFramePreview();
    }
});