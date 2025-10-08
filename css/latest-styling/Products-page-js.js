
/* ===== Products data (use the productsData you already had) ===== */
const productsData = {
    1: {
        title: "Our Products",
        description: "Explore our comprehensive suite of business solutions designed to streamline operations, enhance productivity, and drive growth for travel and service businesses.",
        screenshot: "images/Tripmeld-crm.png",
        subtitle: "TripMeld Product Suite",
        link: "https://tripmeld.com/",
        features: [
            { title: "🎯 Complete Solutions", desc: "End-to-end business management tools for modern enterprises." },
            { title: "🔧 Customizable", desc: "Tailor each product to match your specific business requirements." },
            { title: "📱 Mobile Ready", desc: "Access all features on any device, anywhere, anytime." },
            { title: "🔒 Secure & Reliable", desc: "Enterprise-grade security with 99.9% uptime guarantee." },
            { title: "📈 Analytics Driven", desc: "Make data-driven decisions with comprehensive reporting." }
        ]
    },
    2: {
        title: "TripMeld Travel CRM",
        description: "Our experienced consultants work closely with clients to provide insights, analysis, and recommendations to help them make informed decisions and achieve their business goals. We use a data-driven approach and the latest tools and technologies to provide customized solutions.",
        screenshot: "images/Tripmeld-crm.png",
        subtitle: "TripMeld Travel CRM",
        link: "https://tripmeld.com/travelcrm",
        features: [
            { title: "📊 Instant Lead Generation", desc: "Capture leads instantly through multiple channels and automatically organize them." },
            { title: "🔄 Integrated Query Creation", desc: "Streamline workflow with automated query creation from customer inquiries." },
            { title: "💬 Seamless Communication", desc: "Connect with clients through integrated messaging and call tracking." },
            { title: "🔗 Trip/Visa Integration", desc: "Manage travel bookings and visa applications in one platform." },
            { title: "⏱️ Real-Time View Tracking", desc: "Monitor customer interactions and engagement with detailed analytics." }
        ]
    },
    3: {
        title: "Call Tracker App",
        description: "Track and manage client data effortlessly with our integrated Call Tracker App designed for sales and operations teams. Monitor call performance, record conversations, and analyze customer interactions to improve service quality.",
        screenshot: "images/call-tracker-app-product.png",
        subtitle: "Call Tracker Pro",
        link: "https://tripmeld.com/calltracker",
        features: [
            { title: "📞 Call Recording", desc: "Automatically record and store all customer calls for quality assurance." },
            { title: "📈 Performance Analytics", desc: "Track call metrics, duration, and conversion rates in real-time." },
            { title: "🎯 Lead Scoring", desc: "Automatically score leads based on call quality and conversation content." },
            { title: "🔔 Smart Notifications", desc: "Get instant alerts for missed calls and important customer inquiries." },
            { title: "📊 Detailed Reports", desc: "Generate comprehensive call reports for team performance evaluation." }
        ]
    },
    4: {
        title: "Website Builder",
        description: "Create stunning, professional websites without any coding knowledge. Our drag-and-drop builder comes with pre-designed templates, responsive layouts, and powerful features to establish your online presence.",
        screenshot: "images/website-builder-product.png",
        subtitle: "Visual Website Builder",
        link: "https://tripmeld.com/webbuilder",
        features: [
            { title: "🎨 Drag & Drop Editor", desc: "Build beautiful websites with intuitive drag-and-drop interface." },
            { title: "📱 Mobile Responsive", desc: "All templates are fully responsive and mobile-optimized automatically." },
            { title: "🚀 Fast Hosting", desc: "Lightning-fast hosting with CDN and SSL certificates included." },
            { title: "🔧 SEO Optimized", desc: "Built-in SEO tools to help your website rank higher in search results." },
            { title: "🛒 E-commerce Ready", desc: "Add shopping cart functionality and start selling online instantly." }
        ]
    },
    5: {
        title: "WhatsApp Marketing",
        description: "Leverage the power of WhatsApp to reach your customers directly. Send bulk messages, create automated campaigns, and manage customer conversations all from one centralized platform.",
        screenshot: "images/whatsapp-marketing.png",
        subtitle: "WhatsApp Business Solution",
        link: "https://tripmeld.com/whatsapp",
        features: [
            { title: "💬 Bulk Messaging", desc: "Send personalized messages to thousands of customers simultaneously." },
            { title: "🤖 Chatbot Integration", desc: "Automate responses with AI-powered chatbots for 24/7 support." },
            { title: "📊 Campaign Analytics", desc: "Track message delivery, open rates, and customer engagement metrics." },
            { title: "👥 Contact Management", desc: "Organize contacts into groups and segments for targeted campaigns." },
            { title: "📅 Scheduled Messages", desc: "Plan and schedule messages to send at optimal times automatically." }
        ]
    },
    6: {
        title: "ReyferJobs",
        description: "Connect talented professionals with exciting job opportunities. Our platform streamlines the hiring process for both employers and job seekers with smart matching algorithms and comprehensive applicant tracking.",
        screenshot: "images/website-builder-product.png",
        subtitle: "ReyferJobs Platform",
        link: "https://tripmeld.com/reyferjobs",
        features: [
            { title: "🎯 Smart Job Matching", desc: "AI-powered algorithms match candidates with relevant job opportunities." },
            { title: "📝 Easy Application", desc: "Simple one-click applications with resume parsing and auto-fill." },
            { title: "🔔 Job Alerts", desc: "Instant notifications for new jobs matching candidate preferences." },
            { title: "📊 Applicant Tracking", desc: "Comprehensive ATS for employers to manage hiring pipeline efficiently." },
            { title: "💼 Company Profiles", desc: "Showcase company culture and values to attract top talent." }
        ]
    }
};

/* ===== State ===== */
let inAllProductsMode = false;
let subIndex = 1;         // which product inside the All-Products cycle (1..6)
let cycleTimer = null;
const cycleInterval = 3000;  // time between nested slides (ms)
const initialAllDelay = 2500;
/* ===== Update DOM for a product ===== */
function updateProductDom(productId, animated = false, showFeatures = true, showScreenshot = true) {
    const product = productsData[productId];
    if (!product) return;

    const $screenshot = $('.product-screenshot');
    const $subtitle = $('.product-subtitle');
    const $featureDetailSection = $('.feature-detail');

    // ---------- LEFT SIDE ----------
    const $left = $('.content-left');
    if (showScreenshot) {
        $screenshot.attr('src', product.screenshot).show(); // ensure image visible
        $subtitle.text(product.subtitle).show();

        if (!inAllProductsMode) {
            $left.addClass('active'); // make left side visible
            $left.removeClass('animate-right exit-left'); // remove animation classes
        }
    } else {
        $screenshot.hide();
        $subtitle.hide();
    }


    // ---------- RIGHT SIDE ----------
    $('.product-title').text(product.title);
    $('.product-description').text(product.description);
    $('.product-link')
        .attr('href', product.link)
        .text(product.link.replace(/^https?:\/\//, '') + ' →');
    // .text('Learn More →');
    $('.btn').off('click').on('click', function (e) {
        e.preventDefault();

        if (inAllProductsMode) {
            stopAllProductsCycle();
            const productIndex = productId;
            $('.tab-link').removeClass('active');
            $(`.tab-link[data-tab="${productIndex}"]`).addClass('active');
            updateProductDom(productIndex, false, true, true);
        } else {
            // window.open(product.link, '_blank');
        }
    });


    const $featuresSection = $('.product-features-section'); // entire features container
    const $featuresGrid = $('.features-grid');
    // const $featureDetailSection = $('.feature-detail');
    const $featureDetailTitle = $('.feature-detail-title');
    const $featureDetailDesc = $('.feature-detail-desc');
    const $featureDetailImg = $('.feature-detail-img');
    const $featureDetailList = $('.feature-detail-list');

    if (showFeatures) {
        // Show features section for individual products
        $featuresSection.show();
        $featuresGrid.empty();
        product.features.forEach(f => {
            const $card = $(`<div class="feature-card"></div>`);
            $card.html(`<h3>${f.title}</h3><p>${f.desc}</p>`);
            $featuresGrid.append($card);
        });

        // Detailed feature (bottom card)
        if (product.features.length > 0) {
            const firstFeature = product.features[0];
            $featureDetailTitle.text(firstFeature.title);
            $featureDetailDesc.text(firstFeature.desc);
            $featureDetailImg.attr('src', product.screenshot); // or feature-specific image
            $featureDetailList.empty();
            product.features.forEach(f => {
                $featureDetailList.append(`<li>${f.desc}</li>`);
            });
        }
        $featureDetailSection.show();
    } else {
        // Hide entire features section for "All Products" loop
        $featuresSection.hide();
    }


    if (animated && inAllProductsMode) {
        const $left = $('.content-left');

        // Remove previous animation
        $left.removeClass('animate-right');

        // Trigger reflow to restart animation
        void $left[0].offsetWidth;

        // Add animation class
        $left.addClass('animate-right');
    }


    // ---------- ANIMATION ----------
    if (animated) {
        $('.content-left').removeClass('active').addClass('exit-left');
        setTimeout(() => {
            $('.content-left').removeClass('exit-left').addClass('active');
        }, 420);

        if (inAllProductsMode) {
            $('.content-right').removeClass('animate');
            void document.querySelector('.content-right').offsetWidth;
            $('.content-right').addClass('animate');
        }
    } else {
        $('.content-left').removeClass('exit-left').addClass('active');
        $('.content-right').removeClass('animate');
    }
}

/* ===== All Products cycle ===== */
function startAllProductsCycle() {
    if (cycleTimer) clearTimeout(cycleTimer);

    inAllProductsMode = true;
    subIndex = 2;

    $('.tab-link').removeClass('active');
    $('.tab-link[data-tab="1"]').addClass('active');

    // show All Products summary with screenshot
    updateProductDom(1, true, false, true);

    cycleTimer = setTimeout(function runCycle() {
        if (!inAllProductsMode) return;

        // cycle individual products with image, title, desc, link (no features)
        updateProductDom(subIndex, true, false, true);

        subIndex++;
        const maxIndex = Object.keys(productsData).length;
        if (subIndex > maxIndex) subIndex = 2;

        cycleTimer = setTimeout(runCycle, cycleInterval);
    }, initialAllDelay);
}

/* ===== Stop cycle ===== */
function stopAllProductsCycle() {
    inAllProductsMode = false;
    if (cycleTimer) clearTimeout(cycleTimer);
    $('.content-right').removeClass('animate');
    $('.content-left').removeClass('exit-left').addClass('active');
}


/* ===== Tab click logic ===== */
$('.tab-link').on('click', function (e) {
    e.preventDefault();
    const tab = parseInt($(this).attr('data-tab'), 10);

    $('.tab-link').removeClass('active');
    $(this).addClass('active');

    if (tab === 1) {
        stopAllProductsCycle();
        startAllProductsCycle();
    } else {
        stopAllProductsCycle();
        updateProductDom(tab, false, true, true);
    }
});

/* ===== Initial load ===== */
$(document).ready(function () {
    updateProductDom(1, false, true, true);
    $('.content-left').addClass('active');
    startAllProductsCycle();
});


// Videos Section - Play Button Logic
$(document).ready(function () {
    $(".demo-btn").on("click", function () {
        const videoUrl = $(this).attr("data-video");

        // update iframe source
        $("#demo-video-frame").attr("src", videoUrl);

        // set active button
        $(".demo-btn").removeClass("active");
        $(this).addClass("active");
    });
});
