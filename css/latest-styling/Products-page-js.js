// For Cycling through the all products
let subIndex = 1;
let inAllProductsMode = false;

const data = [
    {
        title: "Our Products",
        text: "Our experienced consultants work closely with clients to provide insights, analysis, and recommendations to help them make informed decisions and achieve their business goals. We use a data-driven approach and the latest tools and technologies to provide customized solutions that meet our clients' unique needs. Whether it's market research, competitive analysis, or business strategy development, we're here to help.",
        img: "images/Tripmeld-crm.png",
        link: "https://tripmeld.com/"
    },
    {
        title: "Travel CRM",
        text: "Our experienced consultants work closely with clients to provide insights, analysis, and recommendations to help them make informed decisions and achieve their business goals. We use a data-driven approach and the latest tools and technologies to provide customized solutions that meet our clients' unique needs. Whether it's market research, competitive analysis, or business strategy development, we're here to help.",
        img: "images/Tripmeld-crm.png",
        link: "https://tripmeld.com/travelcrm"
    },
    {
        title: "Call Tracker App",
        text: "Our experienced consultants work closely with clients to provide insights, analysis, and recommendations to help them make informed decisions and achieve their business goals. We use a data-driven approach and the latest tools and technologies to provide customized solutions that meet our clients' unique needs. Whether it's market research, competitive analysis, or business strategy development, we're here to help.",
        img: "images/tracker-app.png",
        link: "https://tripmeld.com/calltracker"
    },
    {
        title: "Website Builder",
        text: "Our experienced consultants work closely with clients to provide insights, analysis, and recommendations to help them make informed decisions and achieve their business goals. We use a data-driven approach and the latest tools and technologies to provide customized solutions that meet our clients' unique needs. Whether it's market research, competitive analysis, or business strategy development, we're here to help.",
        img: "images/website-builder.png",
        link: "https://tripmeld.com/webbuilder"
    },
    {
        title: "WhatsApp Marketing",
        text: "Our experienced consultants work closely with clients to provide insights, analysis, and recommendations to help them make informed decisions and achieve their business goals. We use a data-driven approach and the latest tools and technologies to provide customized solutions that meet our clients' unique needs. Whether it's market research, competitive analysis, or business strategy development, we're here to help.",
        img: "images/website-builder.png",
        link: "https://tripmeld.com/whatsapp"
    },
    {
        title: "ReyferJobs",
        text: "Our experienced consultants work closely with clients to provide insights, analysis, and recommendations to help them make informed decisions and achieve their business goals. We use a data-driven approach and the latest tools and technologies to provide customized solutions that meet our clients' unique needs. Whether it's market research, competitive analysis, or business strategy development, we're here to help.",
        img: "images/tracker-app.png",
        link: "https://tripmeld.com/reyferjobs"
    }
];

let current = 0;
const total = data.length;

// Function to animate right content from right to left
function animateRightContent() {
    const $right = $(".content-right");

    // Reset animation
    $right.removeClass("animate");

    // Force reflow so the animation restarts
    void $right[0].offsetWidth;

    // Add animation class
    $right.addClass("animate");
}

// Change content function
function changeContent(i) {
    //  if all Products Tab
    if (i === 0) {
        inAllProductsMode = true;
        cycleAllProducts();
        return;
    } else {
        inAllProductsMode = false;
    }
    const d = data[i];
    $(".tab-link").removeClass("active");
    $('.tab-link[data-tab="' + (i + 1) + '"]').addClass("active");

    // Slide out left for left content (optional)
    $(".content-left").removeClass("active").addClass("exit-left");

    setTimeout(() => {
        // Update content
        $(".content-left h1").text(d.title);
        $(".content-left p").text(d.text);
        $(".product-img").attr("src", d.img);
        $(".link").attr("href", d.link).text(d.link + " →");

        // Reset exit class and fade in left content
        $(".content-left").removeClass("exit-left").addClass("active");

        // Animate right content from right to left
        animateRightContent();
    }, 400);
}

// All category Products
function cycleAllProducts() {
    $(".tab-link").removeClass("active");
    $('.tab-link[data-tab="1"]').addClass("active");

    // Get Current Product to display (Skip inde 0)
    const d = data[subIndex];

    // Animate left exist 
    $(".content-left").removeClass("active").addClass("exist-left");

    setTimeout(() => {
        // Update Content
        $(".content-left h1").text(d.title);
        $(".content-left p").text(d.text);
        $(".product-img").attr("src", d.img);
        $(".link").attr("href", d.link).text(d.link + ">");
        $(".content-left").removeClass("exist-left").addClass("active");
        animateRightContent();
    }, 400);

    // Increase the Subindex 
    subIndex++;
    if (subIndex >= total) {
        subIndex = 1;
        inAllProductsMode = false;
        return;
    }
    // If in All Products mode, cycle through
    if (inAllProductsMode) {
        setTimeout(() => {
            cycleAllProducts();
        }, 3000)
    }


}


// Manual tab click
$(".tab-link").click(function () {
    current = $(this).data("tab") - 1;
    changeContent(current);
});

// Initial load: slide in from far right
$(document).ready(function () {
    const d = data[0];
    $(".content-left h1").text(d.title);
    $(".content-left p").text(d.text);
    $(".product-img").attr("src", d.img);
    $(".link").attr("href", d.link).text(d.link + " →");

    $(".content-left").addClass("active");

    // Animate right content initially
    setTimeout(() => {
        animateRightContent();
    }, 100);

    // Start Cycling through all The PRodcuts 
    inAllProductsMode = true;
    subIndex = 1;
    setTimeout(() => {
        cycleAllProducts();
    }, 3000)
    // small Delay
});

// Auto-slide
setInterval(() => {
    // If in All Products mode, cycle through all products
    if (inAllProductsMode) return;
    current = (current + 1) % total;
    changeContent(current);
}, 5000);