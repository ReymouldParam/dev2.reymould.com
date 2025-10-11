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
        description: "Our experienced consultants work closely with clients to provide insights, analysis, and recommendations to help them make informed decisions and achieve their business goals.",
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
        description: "Track and manage client data effortlessly with our integrated Call Tracker App designed for sales and operations teams.",
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
        description: "Create stunning, professional websites without any coding knowledge.",
        screenshot: "images/website-builder-product.png",
        subtitle: "Visual Website Builder",
        link: "https://tripmeld.com/webbuilder",
        features: [
            { title: "🎨 Drag & Drop Editor", desc: "Build beautiful websites easily." },
            { title: "📱 Mobile Responsive", desc: "Fully responsive and mobile-optimized templates." },
            { title: "🚀 Fast Hosting", desc: "Lightning-fast hosting with CDN & SSL." },
            { title: "🔧 SEO Optimized", desc: "Built-in SEO tools for higher rankings." },
            { title: "🛒 E-commerce Ready", desc: "Add shopping cart functionality instantly." }
        ]
    },
    5: {
        title: "WhatsApp Marketing",
        description: "Leverage the power of WhatsApp to reach your customers directly.",
        screenshot: "images/whatsapp-marketing.png",
        subtitle: "WhatsApp Business Solution",
        link: "https://tripmeld.com/whatsapp",
        features: [
            { title: "💬 Bulk Messaging", desc: "Send personalized messages to thousands of customers." },
            { title: "🤖 Chatbot Integration", desc: "Automate responses with AI chatbots." },
            { title: "📊 Campaign Analytics", desc: "Track engagement metrics." },
            { title: "👥 Contact Management", desc: "Organize contacts into segments." },
            { title: "📅 Scheduled Messages", desc: "Plan and send messages automatically." }
        ]
    },
    6: {
        title: "ReyferJobs",
        description: "Connect talented professionals with exciting job opportunities.",
        screenshot: "images/website-builder-product.png",
        subtitle: "ReyferJobs Platform",
        link: "https://tripmeld.com/reyferjobs",
        features: [
            { title: "🎯 Smart Job Matching", desc: "AI matches candidates with relevant jobs." },
            { title: "📝 Easy Application", desc: "One-click applications with resume parsing." },
            { title: "🔔 Job Alerts", desc: "Instant notifications for new jobs." },
            { title: "📊 Applicant Tracking", desc: "Comprehensive ATS for hiring pipeline." },
            { title: "💼 Company Profiles", desc: "Showcase company culture and attract talent." }
        ]
    }
};

/* ===== State ===== */
let inAllProductsMode = false;
let subIndex = 1;
let cycleTimer = null;
const cycleInterval = 3000;
const initialAllDelay = 2500;

/* ===== Update Product DOM ===== */
function updateProductDom(productId, animated = false, showFeatures = true, showScreenshot = true) {
    const product = productsData[productId];
    if (!product) return;

    const $screenshot = $('.product-screenshot');
    const $subtitle = $('.product-subtitle');
    const $featureDetailSection = $('.feature-detail');
    const $left = $('.content-left');

    if (showScreenshot) {
        $screenshot.attr('src', product.screenshot).show();
        $subtitle.text(product.subtitle).show();
        if (!inAllProductsMode) $left.addClass('active');
    } else {
        $screenshot.hide();
        $subtitle.hide();
    }

    $('.product-title').text(product.title);
    $('.product-description').text(product.description);
    $('.product-link')
        .attr('href', product.link)
        .text(product.link.replace(/^https?:\/\//, '') + ' →');

    $('.btn').off('click').on('click', function (e) {
        e.preventDefault();
        if (inAllProductsMode) {
            stopAllProductsCycle();
            const productIndex = productId;
            $('.tab-link').removeClass('active');
            $(`.tab-link[data-tab="${productIndex}"]`).addClass('active');
            updateProductDom(productIndex, false, true, true);
        }
    });

    const $featuresSection = $('.product-features-section');
    const $featuresGrid = $('.features-grid');
    const $featureDetailTitle = $('.feature-detail-title');
    const $featureDetailDesc = $('.feature-detail-desc');
    const $featureDetailImg = $('.feature-detail-img');
    const $featureDetailList = $('.feature-detail-list');

    if (showFeatures) {
        $featuresSection.show();
        $featuresGrid.empty();
        product.features.forEach(f => {
            const $card = $(`<div class="feature-card"><h3>${f.title}</h3><p>${f.desc}</p></div>`);
            $featuresGrid.append($card);
        });

        const firstFeature = product.features[0];
        $featureDetailTitle.text(firstFeature.title);
        $featureDetailDesc.text(firstFeature.desc);
        $featureDetailImg.attr('src', product.screenshot);
        $featureDetailList.empty();
        product.features.forEach(f => $featureDetailList.append(`<li>${f.desc}</li>`));
        $featureDetailSection.show();
    } else {
        $featuresSection.hide();
    }

    if (animated) {
        $('.content-left').removeClass('active').addClass('exit-left');
        setTimeout(() => $('.content-left').removeClass('exit-left').addClass('active'), 420);
    }
}

/* ===== All Products Cycle ===== */
function startAllProductsCycle() {
    if (cycleTimer) clearTimeout(cycleTimer);
    inAllProductsMode = true;
    subIndex = 2;

    $('.tab-link').removeClass('active');
    $('.tab-link[data-tab="1"]').addClass('active');
    updateProductDom(1, true, false, true);

    cycleTimer = setTimeout(function runCycle() {
        if (!inAllProductsMode) return;
        updateProductDom(subIndex, true, false, true);
        subIndex++;
        const maxIndex = Object.keys(productsData).length;
        if (subIndex > maxIndex) subIndex = 2;
        cycleTimer = setTimeout(runCycle, cycleInterval);
    }, initialAllDelay);
}

/* ===== Stop All Products Cycle ===== */
function stopAllProductsCycle() {
    inAllProductsMode = false;
    if (cycleTimer) clearTimeout(cycleTimer);
    $('.content-left').removeClass('exit-left').addClass('active');
}

/* ===== Tab Click Logic ===== */
$('.tab-link').on('click', function (e) {
    e.preventDefault();
    const tab = parseInt($(this).attr('data-tab'), 10);

    $('.tab-link').removeClass('active');
    $(this).addClass('active');

    // hide both areas first
    $('.services-wrapper').hide();
    $('.product-content, .product-features-section').hide();

    if (tab === 1) {
        // show services-wrapper instead of auto cycle
        stopAllProductsCycle();
        $('.services-wrapper').fadeIn(400);
    } else {
        stopAllProductsCycle();
        updateProductDom(tab, false, true, true);
        $('.product-content, .product-features-section').fadeIn(400);
    }
});

/* ===== Learn More Buttons Inside Services ===== */
$(document).on('click', '.services-wrapper .service-card button', function (e) {
    e.preventDefault();
    const title = $(this).closest('.service-card').find('h3').text().trim();

    const tabMap = {
        "Design Services": 2,
        "Brand Consultant": 3,
        "Digital Marketing": 4,
        "Web Development": 5
    };

    const targetTab = tabMap[title];
    if (targetTab) {
        $('.tab-link[data-tab="' + targetTab + '"]').trigger('click');
        $('html, body').animate({ scrollTop: $('.product-content').offset().top - 100 }, 500);
    }
});

/* ===== Initial Load ===== */
$(document).ready(function () {
    // show services-wrapper by default
    $('.tab-link[data-tab="1"]').addClass('active');
    $('.product-content, .product-features-section').hide();
    $('.services-wrapper').show();
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
