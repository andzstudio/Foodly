const restaurants = [
    { 
        id: 1, 
        name: "Stage Nice Dining", 
        type: "pub", 
        cuisine: "Nice Dining & Steak", 
        priceLevel: 3, 
        priceText: "High", 
        rating: 4.9, 
        reviewCount: 3018,
        distance: "0.8 km", 
        lat: 45.4372, lng: 28.0561,
        parking: "green", 
        img: "img/places/stage-place.png", 
        modalImg: "/img/places/modals/stage.png",
        kids: "Yes, High Chairs",
        desc: "A refined culinary experience in the heart of Galați. Stage defines the concept of 'Nice Dining' through attention to detail, premium ingredients, and an intimate, elegant atmosphere.",
        access: "Wheelchair Accessible",
        schedule: "10:00 - 23:30",
        peakHours: [30, 40, 50, 60, 80, 95, 90, 70, 50, 30, 20], 
        bookingSlots: ["18:00", "20:00", "22:00"], 
        phone: "0755 123 456",
        glovoLink: "https://glovoapp.com/ro/ro/galati/stage-nice-dining/",
        address: "Strada Domnească 13, Galați",
        chefChoice: "A masterpiece of fresh Bluefin Tuna tartare, served on a bed of creamy avocado mousse, drizzled with a secret yuzu-truffle dressing that defines our kitchen's soul.",
        scores: { food: 4.9, staff: 4.8, atm: 5.0, price: 4.5 },
        menuCategories: [
            {
                name: "Starters",
                items: [
                    { name: "Tuna Tartare", ingredients: "Fresh tuna, avocado, soy sauce", price: 55, allergens: ["Fish", "Soy"], image: "https://images.unsplash.com/photo-1543362185-1ef17bc10305?q=80&w=800&auto=format&fit=crop" },
                    { name: "Beef Carpaccio", ingredients: "Beef tenderloin, parmesan, arugula", price: 62, allergens: ["Dairy"], image: "https://images.unsplash.com/photo-1599579692998-386227b727de?q=80&w=800&auto=format&fit=crop" }
                ]
            },
            {
                name: "Main Course",
                items: [
                    { name: "Fine Steak", ingredients: "Argentinian ribeye, asparagus", price: 120, allergens: [], image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop" },
                    { name: "Duck Breast", ingredients: "Duck breast, truffle mash", price: 85, allergens: ["Dairy"], image: "https://images.unsplash.com/photo-1627993077395-9430c5e7b233?q=80&w=800&auto=format&fit=crop" }
                ]
            }
        ],
        events: [
            { title: "Romantic Dinner", price: "350 RON", desc: "Set menu 3 courses + Wine." },
            { title: "Corporate Lunch", price: "80 RON", desc: "Mon-Fri, 12:00 - 15:00." }
        ],
        basePrice: 90,
        busyLevel: 60,
        tags: ["#FineDining", "#Luxury", "#Center"],
        liveStatus: "Last 2 Tables",
        statusClass: "badge-urgent", 
        featureBadge: "Best in Town",
        featureClass: "badge-premium"
    },
    { 
        id: 4, 
        name: "Teatris", 
        type: "pub", 
        cuisine: "International & Live Music", 
        priceLevel: 3, 
        priceText: "Med-High", 
        rating: 4.6, 
        reviewCount: 2472,
        distance: "1.2 km", 
        lat: 45.4361, lng: 28.0585,
        parking: "yellow", 
        img: "img/places/teatris-place.png", 
        modalImg: "/img/places/modals/teatris.png",
        desc: "Located inside the Musical Theatre, Teatris combines culinary art with entertainment. The ideal spot for live music nights and excellent food.", 
        access: "Accessible", 
        kids: "Friendly - Playground", 
        schedule: "09:00 - 02:00",
        peakHours: [20, 30, 40, 50, 60, 90, 100, 90, 80, 50, 40],
        bookingSlots: ["19:30", "21:00", "23:00"], 
        phone: "0744 999 888",
        glovoLink: "https://glovoapp.com/ro/ro/galati/teatris/",
        address: "Strada Mihai Bravu 20, Galați",
        chefChoice: "Our signature BBQ Pork Ribs, slow-cooked for 12 hours until fall-off-the-bone tender, glazed with our house-made smoky barbecue sauce.",
        scores: { food: 4.6, staff: 4.7, atm: 4.9, price: 4.5 },
        menuCategories: [
            {
                name: "Grill",
                items: [
                    { name: "BBQ Ribs", ingredients: "Pork ribs, BBQ sauce, potatoes", price: 65, allergens: ["Mustard"], image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" },
                    { name: "Teatris Burger", ingredients: "Black Angus beef, bacon, egg", price: 58, allergens: ["Gluten", "Egg"], image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" }
                ]
            }
        ],
        events: [
            { title: "Kids Party", price: "60 RON", desc: "Menu + Playground included." }
        ],
        basePrice: 70,
        busyLevel: 95,
        tags: ["#LiveMusic", "#Cocktails", "#Vibe"],
        liveStatus: "Very Busy",
        statusClass: "badge-status-yellow",
        featureBadge: "<i class='fas fa-music'></i> Live Music",
        featureClass: "badge-feature"
    },
    { 
        id: 5, 
        name: "Union Jack", 
        type: "pub", 
        cuisine: "Pub & British", 
        priceLevel: 3, 
        priceText: "Med-High", 
        rating: 4.7, 
        reviewCount: 4900,
        distance: "2.5 km", 
        lat: 45.4285, lng: 28.0621,
        parking: "yellow", 
        img: "img/places/union-place.png", 
        modalImg: "/img/places/modals/union.png",
        desc: "London vibe on the Danube promenade. Premium burgers, craft beers, and the best view of the Danube.", 
        access: "Yes", 
        kids: "No (Evening 18+)", 
        schedule: "10:00 - 04:00",
        peakHours: [10, 20, 30, 60, 80, 100, 100, 90, 70, 50, 30],
        bookingSlots: ["20:00", "22:00", "00:00"], 
        phone: "0751 222 333",
        glovoLink: "https://glovoapp.com/ro/ro/galati/union-jack/",
        address: "Upper Danube Promenade, Galați",
        chefChoice: "The legendary Black Angus Burger. A juicy, flame-grilled patty topped with melted aged cheddar, crispy bacon, and caramelized onions.",
        scores: { food: 4.7, staff: 4.5, atm: 4.8, price: 4.4 },
        menuCategories: [
            {
                name: "Burgers",
                items: [
                    { name: "Jack's Burger", ingredients: "Beef, cheddar, caramelized onions", price: 55, allergens: ["Gluten", "Dairy"], image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" },
                    { name: "Spicy Burger", ingredients: "Beef, jalapeno, spicy sauce", price: 57, allergens: ["Gluten"], image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop" }
                ]
            }
        ],
        events: [],
        basePrice: 65,
        busyLevel: 70,
        tags: ["#Burgers", "#Beer", "#RiverView"],
        liveStatus: "Lively",
        statusClass: "badge-status-blue",
        featureBadge: "<i class='fas fa-water'></i> River View",
        featureClass: "badge-feature"
    },
    { 
        id: 6, 
        name: "Acquarello", 
        type: "italian", 
        cuisine: "Italian & Pizza", 
        priceLevel: 2, 
        priceText: "Medium", 
        rating: 4.5, 
        reviewCount: 1495,
        distance: "1.8 km", 
        lat: 45.4421, lng: 28.0451,
        parking: "yellow", 
        img: "img/places/acquarello-place.png", 
        modalImg: "/img/places/modals/acquarello.png",
        desc: "Hearth-baked pizza, just like in Naples. Authentic ingredients brought directly from Italy.", 
        access: "Yes", 
        kids: "Playground", 
        schedule: "11:00 - 23:00",
        peakHours: [20, 40, 60, 80, 90, 80, 70, 60, 40, 20, 10],
        bookingSlots: ["13:00", "15:00", "19:00"], 
        phone: "0723 456 789",
        glovoLink: "https://glovoapp.com/ro/ro/galati/acquarello/",
        address: "Strada Brăilei (Țiglina 1), Galați",
        chefChoice: "Authentic Pizza Quattro Formaggi, featuring a harmonious blend of Mozzarella, Gorgonzola, Parmesan, and Pecorino on a thin, crispy crust.",
        scores: { food: 4.8, staff: 4.4, atm: 4.3, price: 4.6 },
        menuCategories: [
            {
                name: "Pizza",
                items: [
                    { name: "Margherita", ingredients: "Tomato sauce, mozzarella, basil", price: 38, allergens: ["Gluten", "Dairy"], image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop" },
                    { name: "Quattro Formaggi", ingredients: "Mozzarella, gorgonzola, parmesan", price: 45, allergens: ["Gluten", "Dairy"], image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" }
                ]
            }
        ],
        events: [
             { title: "Kids Pizza Workshop", price: "50 RON", desc: "Every Sunday morning." }
        ],
        basePrice: 50,
        busyLevel: 50,
        tags: ["#Pizza", "#Pasta", "#Family"],
        liveStatus: "Available",
        statusClass: "badge-status-green",
        featureBadge: "<i class='fas fa-child'></i> Kid Friendly",
        featureClass: "badge-feature"
    },
    { 
        id: 7, 
        name: "Casa Românească", 
        type: "traditional", 
        cuisine: "Romanian", 
        priceLevel: 2, 
        priceText: "Medium", 
        rating: 3.9, 
        reviewCount: 876,
        distance: "0.5 km", 
        lat: 45.4325, lng: 28.0521,
        parking: "green", 
        img: "img/places/casa-place.png", 
        modalImg: "/img/places/modals/casa.png",
        desc: "Just like mom's cooking. Generous portions, rustic atmosphere, and folk music.", 
        access: "Stairs only", 
        kids: "Yes", 
        schedule: "10:00 - 23:00",
        peakHours: [30, 40, 50, 70, 70, 60, 50, 40, 30, 20, 10],
        bookingSlots: ["12:00", "14:00", "19:00"], 
        phone: "0766 111 222",
        glovoLink: "#",
        address: "Strada Traian 50, Galați",
        chefChoice: "The Boyar's Platter - A feast fit for royalty with assorted traditional meats, sausages, polenta, and pickles.",
        scores: { food: 4.2, staff: 3.8, atm: 4.0, price: 4.5 },
        menuCategories: [
            {
                name: "Traditional",
                items: [
                    { name: "Cabbage Rolls", ingredients: "Pork, cabbage, sour cream, polenta", price: 45, allergens: ["Dairy"], image: "https://images.unsplash.com/photo-1549488352-843258fb3616?q=80&w=800&auto=format&fit=crop" },
                    { name: "Mici (pcs)", ingredients: "Beef/pork mix, mustard", price: 8, allergens: [], image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=800&auto=format&fit=crop" }
                ]
            }
        ],
        events: [],
        basePrice: 50,
        busyLevel: 60,
        tags: ["#Traditional", "#Wine", "#Cozy"],
        liveStatus: "Cozy",
        statusClass: "badge-status-yellow",
        featureBadge: "<i class='fas fa-wine-glass'></i> Traditional",
        featureClass: "badge-feature"
    },
    { 
        id: 2, 
        name: "Sushi Master", 
        type: "asian", 
        cuisine: "Japanese & Sushi", 
        priceLevel: 2, 
        priceText: "Medium", 
        rating: 4.8, 
        reviewCount: 540,
        distance: "1.0 km", 
        lat: 45.4332, lng: 28.0512,
        parking: "yellow", 
        img: "img/places/sushi-place.png", 
        modalImg: "/img/places/modals/sushi.png",
        desc: "The fastest sushi in town. Modern techniques meet traditional flavors.", 
        access: "Yes", 
        kids: "Friendly", 
        schedule: "10:00 - 22:00",
        peakHours: [10, 20, 40, 60, 80, 80, 70, 50, 40, 30, 10],
        bookingSlots: ["12:30", "18:30", "20:30"], 
        phone: "0788 777 666",
        glovoLink: "https://glovoapp.com/ro/ro/galati/sushi-master-gl/",
        address: "Strada Brăilei (Potcoava), Galați",
        chefChoice: "Philadelphia Gold Roll - A luxurious roll wrapped in premium salmon, filled with velvety cream cheese and avocado.",
        scores: { food: 4.9, staff: 4.7, atm: 4.5, price: 4.6 },
        menuCategories: [
            {
                name: "Rolls",
                items: [
                    { name: "Philadelphia Roll", ingredients: "Salmon, cream cheese", price: 45, allergens: ["Fish", "Dairy"], image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd43da?q=80&w=800&auto=format&fit=crop" },
                    { name: "California", ingredients: "Surimi, avocado, sesame", price: 42, allergens: ["Fish", "Sesame"], image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop" }
                ]
            }
        ],
        events: [],
        basePrice: 55,
        busyLevel: 85,
        tags: ["#Fresh", "#Quick", "#Healthy"],
        liveStatus: "Quick Bite",
        statusClass: "badge-status-green",
        featureBadge: "<i class='fas fa-bolt'></i> Fast",
        featureClass: "badge-feature"
    },
    { 
        id: 3, 
        name: "Nihao", 
        type: "asian", 
        cuisine: "Authentic Chinese", 
        priceLevel: 2, 
        priceText: "Medium", 
        rating: 4.3, 
        reviewCount: 656,
        distance: "3.2 km", 
        lat: 45.4452, lng: 28.0582,
        parking: "none", 
        img: "img/places/nihao-place.png", 
        modalImg: "/img/places/modals/nihao.png",
        desc: "Traditional Asian taste with a spicy twist. The Wok experience at its best.", 
        access: "Stairs", 
        kids: "Ok", 
        schedule: "11:00 - 22:00",
        peakHours: [10, 20, 30, 50, 60, 50, 40, 30, 20, 10, 10],
        bookingSlots: ["13:00", "19:00", "21:00"], 
        phone: "0799 555 444",
        glovoLink: "https://glovoapp.com/ro/ro/galati/nihao/",
        address: "Strada Siderurgiștilor, Galați",
        chefChoice: "Gong Bao Chicken - A classic Sichuan dish bringing together tender chicken, crunchy peanuts, and fiery chili peppers in a savory, slightly sweet sauce.",
        scores: { food: 4.4, staff: 4.2, atm: 4.0, price: 4.8 },
        menuCategories: [
            {
                name: "Wok",
                items: [
                    { name: "Gong Bao Chicken", ingredients: "Chicken, peanuts, hot sauce", price: 38, allergens: ["Peanuts", "Soy"], image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop" },
                    { name: "Beef Noodles", ingredients: "Noodles, beef, vegetables", price: 40, allergens: ["Gluten", "Egg", "Soy"], image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop" }
                ]
            }
        ],
        events: [],
        basePrice: 45,
        busyLevel: 40,
        tags: ["#Spicy", "#Wok", "#Authentic"],
        liveStatus: "Walk-in OK",
        statusClass: "badge-status-green",
        featureBadge: "<i class='fas fa-fire'></i> Authentic Wok",
        featureClass: "badge-feature"
    }
];

const testimonials = [
    { 
        name: "Andrei Popescu", 
        found: "Stage Nice Dining", 
        stars: 5, 
        time: "10m ago", 
        quote: "Honestly, the best tuna tartare I've had in Galați. Foodly recommended it for a date night, and it was perfect.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    { 
        name: "Elena Dumitru", 
        found: "Acquarello", 
        stars: 5, 
        time: "45m ago", 
        quote: "Finally found authentic pizza! The crust is exactly like in Naples. Thanks for the tip!",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    { 
        name: "Mihai Ionescu", 
        found: "Union Jack", 
        stars: 4, 
        time: "2h ago", 
        quote: "Great view of the Danube. The burger was huge. A bit noisy, but great vibe.",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    { 
        name: "Cristina Radu", 
        found: "Sushi Master", 
        stars: 5, 
        time: "15m ago", 
        quote: "Super fast delivery. The Philadelphia roll was fresh and creamy. Will order again.",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    { 
        name: "Vlad Stoica", 
        found: "Teatris", 
        stars: 5, 
        time: "3h ago", 
        quote: "Live music was amazing! Perfect spot for a Friday night out with friends.",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    { 
        name: "Ana Maria", 
        found: "Casa Românească", 
        stars: 4, 
        time: "5h ago", 
        quote: "Huge portions! The cabbage rolls taste exactly like my grandma's.",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    { 
        name: "George Stan", 
        found: "Nihao", 
        stars: 5, 
        time: "20m ago", 
        quote: "Spicy just how I like it. Best Wok in town, hands down.",
        img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=150&q=80"
    },
    { 
        name: "Diana M.", 
        found: "Stage Nice Dining", 
        stars: 5, 
        time: "1h ago", 
        quote: "Elegant atmosphere. The service was impeccable.",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
     { 
        name: "Robert D.", 
        found: "Union Jack", 
        stars: 5, 
        time: "30m ago", 
        quote: "Beer selection is top notch. Best place to watch the game.",
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80"
    }
];

let currentRestaurant = null;
let currentHungerMultiplier = 1.0;
let modalLenis = null;

function showToast(msg) {
    const t = document.getElementById('toast');
    if(t) { t.innerText = msg; t.className = "show"; setTimeout(() => t.className = t.className.replace("show", ""), 3000); }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
        function raf(time) { 
            lenis.raf(time); 
            requestAnimationFrame(raf); 
        }
        requestAnimationFrame(raf);
        window.lenisObj = lenis; 
    }

    const loader = document.getElementById('loader');
    if (typeof gsap !== 'undefined') {
        gsap.to(loader, { opacity: 0, duration: 0.8, ease: "power2.out", delay: 0.2, onComplete: () => loader.style.display = 'none' });
    }

    const vibeCheckboxes = document.querySelectorAll('input[name="vibe"]');
    vibeCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const checked = document.querySelectorAll('input[name="vibe"]:checked');
            if (checked.length > 3) {
                cb.checked = false;
                showToast("Maximum 3 vibes allowed");
            }
        });
    });

    const suggestionForm = document.getElementById('suggestion-form');
    const submitBtn = document.getElementById('submit-suggestion');

    if(suggestionForm && submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (suggestionForm.checkValidity()) {
                showToast('Suggestion sent successfully!');
                suggestionForm.reset();
            } else {
                showToast('Please fill out all required fields!');
                const toast = document.getElementById('toast');
                toast.classList.add('shake');
                const overlay = document.getElementById('error-overlay');
                overlay.classList.add('active');
                setTimeout(() => {
                    toast.classList.remove('shake');
                    overlay.classList.remove('active');
                }, 500);
            }
        });
    }

    adjustFooterSpace();
    window.addEventListener('resize', adjustFooterSpace);

    initScrollAnimations();
    renderAdvancedFiltersUI();
    applyAdvancedFilters(); 
    setupNewFullPageModal();
    animateIconsRandomly();
    
    renderTestimonials();
    initTestimonialAnimations();
});

function adjustFooterSpace() {
    const footer = document.getElementById('main-footer');
    const wrapper = document.getElementById('content-wrapper');
    if(footer && wrapper) wrapper.style.marginBottom = `${footer.offsetHeight}px`;
}

function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.to("#progress-bar", { width: "100%", ease: "none", scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0 } });
    
    const tl = gsap.timeline({ scrollTrigger: { trigger: ".hero-section", start: "top top", end: "+=120%", pin: true, scrub: 1 } });
    tl.to("#featured-container", { top: "10%", width: "100%", maxWidth: "100%", borderRadius: "20px 20px 0 0", ease: "power2.out" });
    gsap.set("#filters-container", { opacity: 1, y: 0 });
}

function animateIconsRandomly() {
    if (typeof gsap === 'undefined') return;
    document.querySelectorAll('.floating-icon').forEach(icon => {
        gsap.to(icon, { color: '#570014', duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: Math.random() * 5 });
    });
}

function renderTestimonials() {
    const stream = document.getElementById('reviews-stream');
    if(!stream) return;

    testimonials.forEach((t) => {
        const item = document.createElement('div');
        item.className = "editorial-quote-item";
        
        let starsHtml = '';
        for(let i=0; i<5; i++) {
             starsHtml += (i < t.stars) ? '<i class="fas fa-star text-accent text-[10px]"></i>' : '<i class="fas fa-star text-gray-200 text-[10px]"></i>';
        }

        item.innerHTML = `
            <span class="editorial-tag">${t.found}</span>
            <div class="editorial-quote-mark">“</div>
            <p class="editorial-text">${t.quote}</p>
            
            <div class="editorial-author">
                <div class="author-img-ring">
                    <img src="${t.img}" class="w-12 h-12 rounded-full object-cover">
                </div>
                <div>
                    <h5 class="text-sm font-bold text-gray-900">${t.name}</h5>
                    <div class="flex gap-1 mt-0.5">${starsHtml} <span class="text-[10px] text-gray-400 font-medium ml-2 uppercase">${t.time}</span></div>
                </div>
            </div>
        `;
        stream.appendChild(item);
    });
}

function initTestimonialAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const quotes = document.querySelectorAll('.editorial-quote-item');
    quotes.forEach(quote => {
        gsap.to(quote, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: quote,
                start: "top 75%",
                end: "top 40%",
                scrub: 1,
                toggleClass: "active-quote"
            }
        });
    });

    gsap.fromTo("#locals-favorites-section .lg\\:w-5\\/12 > div", 
        { opacity: 0, x: -50 }, 
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#locals-favorites-section", start: "top 70%" } }
    );

    const endCta = document.getElementById('stream-end-cta');
    if(endCta) {
        gsap.to(endCta, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: endCta,
                start: "top 80%",
            }
        });
    }
}

const advancedFilters = { search: '', cuisine: 'all', parking: [], kids: false, sort: 'recommended' };

function renderAdvancedFiltersUI() {
    const searchInput = document.getElementById('search-input');
    if(searchInput) searchInput.addEventListener('input', (e) => { advancedFilters.search = e.target.value.toLowerCase(); applyAdvancedFilters(); });

    const sortBtn = document.getElementById('sort-btn');
    const sortMenu = document.getElementById('sort-menu');
    const sortIcon = document.getElementById('sort-icon');
    const sortLabel = document.getElementById('sort-label');
    const sortOptions = document.querySelectorAll('.sort-option');

    if(sortBtn) {
        sortBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = sortMenu.classList.contains('opacity-100');
            if(isOpen) { sortMenu.classList.add('opacity-0', 'invisible', 'scale-95'); sortMenu.classList.remove('opacity-100', 'visible', 'scale-100'); sortIcon.classList.remove('rotate-180'); } 
            else { sortMenu.classList.remove('opacity-0', 'invisible', 'scale-95'); sortMenu.classList.add('opacity-100', 'visible', 'scale-100'); sortIcon.classList.add('rotate-180'); }
        });
    }

    sortOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            advancedFilters.sort = opt.dataset.val;
            sortLabel.textContent = opt.querySelector('span').textContent;
            sortOptions.forEach(o => o.querySelector('.check-icon').classList.replace('opacity-100', 'opacity-0'));
            opt.querySelector('.check-icon').classList.replace('opacity-0', 'opacity-100');
            applyAdvancedFilters();
            sortMenu.classList.add('opacity-0', 'invisible', 'scale-95');
            sortIcon.classList.remove('rotate-180');
        });
    });

    document.querySelectorAll('.cuisine-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cuisine-btn').forEach(b => b.className = "cuisine-btn px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wide transition-all text-gray-500 hover:text-black flex-shrink-0");
            btn.className = "cuisine-btn px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wide transition-all bg-black text-white shadow-lg flex-shrink-0 transform scale-105";
            advancedFilters.cuisine = btn.dataset.val;
            applyAdvancedFilters();
        });
    });

    document.querySelectorAll('.parking-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.dataset.val;
            if(advancedFilters.parking.includes(val)) advancedFilters.parking = advancedFilters.parking.filter(p => p !== val);
            else advancedFilters.parking.push(val);
            btn.classList.toggle('bg-green-50'); btn.classList.toggle('border-green-500'); btn.classList.toggle('text-green-600');
            applyAdvancedFilters();
        });
    });
}

window.toggleKidsFilter = function() {
    advancedFilters.kids = !advancedFilters.kids;
    const btn = document.getElementById('filter-kids');
    if(advancedFilters.kids) btn.classList.add('bg-accent/5', 'text-accent', 'border-accent');
    else btn.classList.remove('bg-accent/5', 'text-accent', 'border-accent');
    applyAdvancedFilters();
}

function applyAdvancedFilters() {
    let filtered = restaurants.filter(r => {
        const matchSearch = r.name.toLowerCase().includes(advancedFilters.search) || r.cuisine.toLowerCase().includes(advancedFilters.search);
        const matchCuisine = advancedFilters.cuisine === 'all' || r.type === advancedFilters.cuisine;
        let matchKids = true;
        if (advancedFilters.kids) matchKids = !r.kids.toLowerCase().includes('no'); 
        let matchParking = true;
        if (advancedFilters.parking.length > 0) matchParking = advancedFilters.parking.includes(r.parking);
        return matchSearch && matchCuisine && matchKids && matchParking;
    });

    if (advancedFilters.sort === 'az') filtered.sort((a, b) => a.name.localeCompare(b.name));
    else if (advancedFilters.sort === 'za') filtered.sort((a, b) => b.name.localeCompare(a.name));
    else if (advancedFilters.sort === 'price_low') filtered.sort((a, b) => a.priceLevel - b.priceLevel);
    else if (advancedFilters.sort === 'price_high') filtered.sort((a, b) => b.priceLevel - a.priceLevel);
    
    renderRestaurants(filtered);
}

function renderRestaurants(filteredRestaurants) {
    const stackArea = document.getElementById('restaurant-stack');
    if(!stackArea) return;
    stackArea.innerHTML = '';
    
    if (filteredRestaurants.length === 0) {
        stackArea.innerHTML = `<div class="flex flex-col items-center justify-center py-40"><h3 class="text-3xl font-black text-gray-300 uppercase mb-2 tracking-tighter">0 Results</h3><button onclick="resetFilters()" class="text-xs font-bold uppercase border-b border-black pb-1 hover:text-accent transition-colors">Clear Filters</button></div>`;
        return;
    }

    const grid = document.createElement('div');
    grid.className = "flex flex-col gap-12 max-w-[1400px] mx-auto";

    filteredRestaurants.forEach((r, idx) => {
        const item = document.createElement('div');
        item.className = "group bg-white rounded-[2.5rem] p-4 shadow-xl shadow-gray-100 border border-gray-100 hover:border-gray-200 transition-all duration-300 flex flex-col lg:flex-row gap-8 cursor-pointer relative overflow-visible";
        
        let ratingText = r.rating >= 4.7 ? "Exceptional" : r.rating >= 4.5 ? "Superb" : r.rating >= 4.0 ? "Very Good" : "Good";
        let ratingColor = r.rating >= 4.7 ? "bg-green-600" : r.rating >= 4.0 ? "bg-black" : "bg-gray-400";
        
        let parkingIcon = r.parking === 'green' ? 'parking' : r.parking === 'yellow' ? 'check-circle' : 'times-circle';
        let parkingLabel = r.parking === 'green' ? "Private" : r.parking === 'yellow' ? "Public" : "None";

        let slotsHtml = '';
        if(r.bookingSlots && r.bookingSlots.length > 0) {
            r.bookingSlots.forEach(time => {
                slotsHtml += `<button onclick="event.stopPropagation(); showToast('Booking ${time}...')" class="px-3 py-1.5 rounded-lg border border-accent/20 text-accent bg-accent/5 hover:bg-accent hover:text-white transition-colors text-[10px] font-bold whitespace-nowrap cursor-pointer shadow-sm">${time}</button>`;
            });
        } else {
            slotsHtml = `<span class="text-[9px] text-gray-400 italic pl-1">Walk-in only</span>`;
        }

        item.innerHTML = `
            <div class="w-full lg:w-5/12 relative h-72 lg:h-auto overflow-hidden rounded-[2rem] group">
                <img src="${r.img}" alt="${r.name}" class="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105">
            </div>

            <div class="w-full lg:w-7/12 flex flex-col py-2 pr-2 lg:pr-6 relative">
                
                <div class="flex flex-wrap gap-2 mb-3">
                    <span class="${r.statusClass} flex items-center gap-2 w-max">
                        ${r.liveStatus}
                    </span>
                    <span class="${r.featureClass} w-max">
                        ${r.featureBadge}
                    </span>
                </div>

                <div class="flex justify-between items-start mb-3">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-[10px] font-black uppercase tracking-widest text-accent">${r.cuisine}</span>
                            <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span class="text-[10px] font-bold text-gray-400 uppercase">${r.priceText}</span>
                        </div>
                        <h2 class="text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight group-hover:text-accent transition-colors">${r.name}</h2>
                    </div>
                    <div class="flex flex-col items-end">
                        <div class="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-2xl border border-gray-100">
                            <div class="text-right mr-1">
                                <div class="text-[10px] font-black uppercase text-gray-800">${ratingText}</div>
                                <div class="text-[9px] text-gray-400 font-bold">${r.reviewCount.toLocaleString()} reviews</div>
                            </div>
                            <div class="w-11 h-11 ${ratingColor} text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">${r.rating}</div>
                        </div>
                    </div>
                </div>

                <div class="mb-5 bg-gray-50/50 p-4 rounded-2xl border border-gray-100 flex gap-4 items-start">
                    <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 flex-shrink-0 text-accent"><i class="fas fa-quote-left text-xs"></i></div>
                    <div>
                        <p class="text-xs font-bold text-gray-900 uppercase mb-0.5">Chef's Choice</p>
                        <p class="text-xs text-gray-600 italic">"${r.chefChoice}"</p>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    <div class="flex items-center gap-2 text-xs font-bold text-gray-600 border border-gray-100 rounded-xl p-3"><i class="fas fa-map-marker-alt text-gray-400"></i> ${r.distance}</div>
                    <div class="flex items-center gap-2 text-xs font-bold text-gray-600 border border-gray-100 bg-white rounded-xl p-3 shadow-sm"><i class="fas fa-${parkingIcon} text-gray-400"></i> ${parkingLabel}</div>
                    <div class="flex items-center gap-2 text-xs font-bold text-gray-600 border border-gray-100 rounded-xl p-3"><i class="fas fa-wifi text-gray-400"></i> Wifi</div>
                    <div class="flex items-center gap-2 text-xs font-bold text-gray-600 border border-gray-100 rounded-xl p-3"><i class="fas fa-utensils text-gray-400"></i> Dine-in</div>
                </div>

                <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div class="flex flex-col gap-1 w-full max-w-[60%]">
                        <span class="text-[9px] font-bold uppercase text-gray-400">Book Slot:</span>
                        <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                            ${slotsHtml}
                        </div>
                    </div>

                    <div class="flex items-center gap-4 group/btn">
                         <span class="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover/btn:text-black transition-colors hidden sm:inline">View Details</span>
                         <button class="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg shadow-accent/20 hover:scale-110 hover:bg-accent transition-all">
                            <i class="fas fa-arrow-right text-xs"></i>
                         </button>
                    </div>
                </div>
            </div>
        `;
        item.addEventListener('click', () => openNewModal(r));
        if (typeof gsap !== 'undefined') gsap.fromTo(item, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: idx * 0.1, ease: "power2.out", scrollTrigger: { trigger: item, start: "top 95%" } });
        grid.appendChild(item);
    });
    stackArea.appendChild(grid);
}

window.resetFilters = function() {
    advancedFilters.search = '';
    const inp = document.getElementById('search-input');
    if(inp) inp.value = '';
    applyAdvancedFilters();
}

function setupNewFullPageModal() {
    const modal = document.getElementById('full-page-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    
    if(closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('translate-y-full');
            document.body.style.overflow = '';
            
            if(modalLenis) {
                modalLenis.destroy();
                modalLenis = null;
            }
            
            if(window.lenisObj) window.lenisObj.start();
        });
    }

    const slider = document.getElementById('fp-calc-slider');
    const displayPpl = document.getElementById('fp-calc-ppl');
    const hungerBtns = document.querySelectorAll('.fp-hunger-btn');
    
    if(slider) {
        slider.addEventListener('input', (e) => {
            displayPpl.innerText = e.target.value;
            calculateTotal();
        });
    }

    hungerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            hungerBtns.forEach(b => b.classList.remove('active', 'bg-white', 'text-black', 'shadow-sm'));
            hungerBtns.forEach(b => b.classList.add('text-gray-500', 'hover:bg-white')); 
            
            btn.classList.remove('text-gray-500', 'hover:bg-white');
            btn.classList.add('active', 'bg-white', 'text-black', 'shadow-sm'); 
            
            currentHungerMultiplier = parseFloat(btn.dataset.mult);
            calculateTotal();
        });
    });
}

function calculateTotal() {
    if(!currentRestaurant) return;
    const people = parseInt(document.getElementById('fp-calc-slider').value);
    const base = currentRestaurant.basePrice;
    
    const estimated = Math.round(base * people * currentHungerMultiplier);
    
    document.getElementById('fp-calc-total').innerText = `${estimated} RON`;
}

function moveMenuImg(e) {
    const floatImg = document.getElementById('menu-float-img');
    const imgEl = floatImg.querySelector('img');
    
    const target = e.target.closest('.menu-item-hover');
    if (!target) return;
    
    const imgSrc = target.getAttribute('data-img');
    if(imgSrc) imgEl.src = imgSrc;

    floatImg.classList.remove('opacity-0');
    
    const x = e.clientX + 20;
    const y = e.clientY - 100;
    
    floatImg.style.left = `${x}px`;
    floatImg.style.top = `${y}px`;
}

function hideMenuImg() {
    const floatImg = document.getElementById('menu-float-img');
    floatImg.classList.add('opacity-0');
}

function openNewModal(r) {
    currentRestaurant = r;
    const modal = document.getElementById('full-page-modal');
    
    if(window.lenisObj) window.lenisObj.stop();
    document.body.style.overflow = 'hidden';

    document.getElementById('fp-cover').src = r.modalImg || r.img;
    document.getElementById('fp-title').style.display = 'none'; 
    document.getElementById('fp-cuisine').innerText = r.cuisine;
    document.getElementById('fp-rating').innerText = r.rating;
    document.getElementById('fp-price').innerText = r.priceText;
    document.getElementById('fp-dist').innerText = r.distance;

    document.getElementById('fp-address').innerText = r.address;
    document.getElementById('fp-schedule').innerText = r.schedule;
    
    const peakGraph = document.getElementById('fp-peak-graph');
    peakGraph.innerHTML = '';
    
    let startHour = 10; 
    
    r.peakHours.forEach((val, idx) => {
        let hClass = val > 70 ? 'bg-red-400' : val > 40 ? 'bg-accent' : 'bg-gray-300';
        let currentHour = startHour + idx;
        let timeLabel = `${currentHour}:00`;
        
        let container = document.createElement('div');
        container.className = 'flex flex-col items-center justify-end h-full flex-1 group relative pb-4';
        
        container.innerHTML = `
            <div class="busy-tooltip">${val} Guests</div>
            <div class="${hClass} w-full rounded-t-sm transition-all hover:opacity-80" style="height: ${val}%"></div>
            <span class="text-[8px] text-gray-400 font-bold absolute bottom-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap block">${timeLabel}</span>
        `;
        peakGraph.appendChild(container);
    });

    document.getElementById('fp-icon-parking').className = `fas fa-parking text-xl mb-1 block ${r.parking === 'green' ? 'text-green-600' : r.parking === 'yellow' ? 'text-yellow-500' : 'text-red-500'}`;

    const glovoBtn = document.getElementById('fp-glovo');
    glovoBtn.href = r.glovoLink;
    glovoBtn.className = "w-full py-3 bg-[#FFC107] rounded-xl text-black text-xs font-bold uppercase text-center flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg";

    const callBtn = document.getElementById('fp-call');
    callBtn.href = `tel:${r.phone}`;
    callBtn.className = "w-full py-3 border border-gray-200 bg-white rounded-xl text-black text-xs font-bold uppercase text-center flex items-center justify-center gap-2 transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg";

    document.getElementById('fp-desc').innerText = r.desc;
    const tagsContainer = document.getElementById('fp-tags');
    tagsContainer.innerHTML = '';
    r.tags.forEach(tag => {
        tagsContainer.innerHTML += `<span class="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-500 uppercase tracking-wide hover:bg-gray-200 transition-colors">${tag}</span>`;
    });

    document.getElementById('fp-chef-choice').innerText = r.chefChoice;
    
    const menuList = document.getElementById('fp-menu-list');
    menuList.innerHTML = '';
    
    r.menuCategories.forEach(cat => {
        let itemsHtml = '';
        cat.items.forEach(item => {
            let allergens = item.allergens.length ? `<span class="text-[10px] text-red-400 block mt-1">Contains: ${item.allergens.join(', ')}</span>` : '';
            itemsHtml += `
                <div class="menu-item-hover flex justify-between items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0 p-2 rounded-lg transition-colors cursor-pointer" data-img="${item.image}">
                    <div>
                        <p class="font-bold text-gray-900 text-lg pointer-events-none">${item.name}</p>
                        <p class="text-sm text-gray-500 mt-1 pointer-events-none">${item.ingredients}</p>
                        ${allergens}
                    </div>
                    <div class="font-bold text-accent whitespace-nowrap ml-4 text-lg pointer-events-none">${item.price} <span class="text-xs align-top">RON</span></div>
                </div>
            `;
        });
        menuList.innerHTML += `
            <div>
                <h5 class="font-bold text-gray-400 uppercase tracking-widest text-xs mb-4 border-b-2 border-accent w-max pb-1">${cat.name}</h5>
                <div class="space-y-2">${itemsHtml}</div>
            </div>
        `;
    });

    document.querySelectorAll('.menu-item-hover').forEach(item => {
        item.addEventListener('mouseenter', moveMenuImg);
        item.addEventListener('mousemove', moveMenuImg);
        item.addEventListener('mouseleave', hideMenuImg);
    });

    document.getElementById('fp-score-total').innerText = r.rating;
    document.getElementById('fp-score-food').innerText = r.scores.food;
    document.getElementById('bar-food').style.width = `${(r.scores.food/5)*100}%`;
    document.getElementById('fp-score-staff').innerText = r.scores.staff;
    document.getElementById('bar-staff').style.width = `${(r.scores.staff/5)*100}%`;
    document.getElementById('fp-score-atm').innerText = r.scores.atm;
    document.getElementById('bar-atm').style.width = `${(r.scores.atm/5)*100}%`;
    document.getElementById('fp-score-price').innerText = r.scores.price;
    document.getElementById('bar-price').style.width = `${(r.scores.price/5)*100}%`;

    const eventsList = document.getElementById('fp-events-list');
    eventsList.innerHTML = '';
    if (r.events && r.events.length > 0) {
        r.events.forEach(ev => {
             eventsList.innerHTML += `
                <div class="p-4 border border-gray-200 rounded-xl hover:border-accent hover:shadow-lg transition-all group">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="font-bold text-gray-900 group-hover:text-accent transition-colors">${ev.title}</h4>
                        <span class="bg-black text-white text-[10px] px-2 py-1 rounded font-bold">${ev.price}</span>
                    </div>
                    <p class="text-xs text-gray-600 mb-3">${ev.desc}</p>
                    <button class="text-[10px] font-bold text-accent uppercase tracking-widest border-b border-accent hover:text-black hover:border-black transition-colors">Book Event</button>
                </div>
             `;
        });
    } else {
        eventsList.innerHTML = '<p class="text-gray-400 italic text-sm">No specific packages. Call for custom offers.</p>';
    }

    const mapFrame = document.getElementById('fp-map');
    mapFrame.src = `https://maps.google.com/maps?q=${r.lat},${r.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    mapFrame.style.filter = "none";

    document.getElementById('fp-calc-slider').value = 2;
    document.getElementById('fp-calc-ppl').innerText = "2";
    calculateTotal();

    modal.classList.remove('translate-y-full');
    
    const scrollContainer = document.getElementById('modal-scroll-container');
    const contentWrapper = document.getElementById('modal-content-wrapper');
    
    if (typeof Lenis !== 'undefined') {
        modalLenis = new Lenis({
            wrapper: scrollContainer,
            content: contentWrapper,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            if(modalLenis) {
                modalLenis.raf(time);
                requestAnimationFrame(raf);
            }
        }
        requestAnimationFrame(raf);
    }
}

window.triggerBooking = function() {
    showToast(`Booking request for ${currentRestaurant.name}`);
}

const stars = document.querySelectorAll('#star-rating-widget i');
let currentRating = 0;

stars.forEach((star, index) => {
    star.addEventListener('mouseenter', () => {
        stars.forEach((s, i) => {
            if(i <= index) s.classList.add('text-yellow-400');
            else s.classList.remove('text-yellow-400');
        });
    });

    star.parentElement.addEventListener('mouseleave', () => {
        stars.forEach((s, i) => {
            if(i < currentRating) s.classList.add('text-yellow-400');
            else s.classList.remove('text-yellow-400');
        });
    });

    star.addEventListener('click', () => {
        currentRating = index + 1;
        gsap.fromTo(star, {scale: 1.5}, {scale: 1, duration: 0.3, ease: "back.out(1.7)"});
    });
});

window.toggleReviewModal = function(show) {
    const modal = document.getElementById('review-success-modal');
    const card = document.getElementById('review-modal-card');
    
    if(show) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100', 'pointer-events-auto');
        card.classList.remove('scale-90', 'translate-y-10');
        card.classList.add('scale-100', 'translate-y-0');
    } else {
        modal.classList.remove('opacity-100', 'pointer-events-auto');
        modal.classList.add('opacity-0', 'pointer-events-none');
        card.classList.remove('scale-100', 'translate-y-0');
        card.classList.add('scale-90', 'translate-y-10');
    }
}

const reviewForm = document.getElementById('new-review-form');
if(reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if(currentRating === 0) {
            showToast("Please select a star rating!");
            return;
        }

        toggleReviewModal(true);
        reviewForm.reset();
        currentRating = 0;
        stars.forEach(s => s.classList.remove('text-yellow-400'));
    });
}