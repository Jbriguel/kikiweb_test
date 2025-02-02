<template>
    <div class="container">
        <!-- Filter Buttons section -->
        <div class="row mt-5" id="filter-buttons">
            <div class="col-12">
                <button v-for="filter in filters" :key="filter.name"
                    :class="['btn', 'mb-2', 'mx-1', { active: activeFilter === filter.name }]"
                    @click="setFilter(filter.name)">
                    {{ filter.label }}
                </button>
            </div>
        </div>

        <!-- Filterable Cards section -->
        <div class="row px-2 mt-4 gap-3" id="filterable-cards">
            <!-- <div v-for="card in filteredCards" :key="card.id" class="card p-0" :data-name="card.category">
                <img :src="card.image" :alt="card.title">
                <div class="card-body">
                    <h6 class="card-title">{{ card.title }}</h6>
                    <p class="card-text">{{ card.description }}</p>
                    
                    <div class="mb-5 d-flex justify-content-around">
                        <h3>190$</h3>
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
          </div>      -->
            <div v-for="card in filteredCards" :key="card.id" class="card p-0" :data-name="card.category">
                <div class="card">
                    <img :src="card.image" :alt="card.title">
                    <div class="card-body">
                        <h6 class="card-title text-primary">{{ card.title }}</h6>
                        <p class="fs-6">{{ card.description }}</p>
                        <div class="mb-0 d-flex justify-content-between">
                            <h6>190$</h6>
                            <button class="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card group -->


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Filter buttons data
            filters: [
                { name: "all", label: "All Services" },
                { name: "feedin", label: "Feed in" },
                { name: "tribabraids", label: "Tribal Braids" },
                { name: "sisterlocksbraids", label: "Sisterlocks braids" },
            ],
            // Cards data
            cards: [
                { id: 1, category: "feedin", title: "Kiki Design", description: "10 hr", image: "/assets/hairs/1.jpg" },
                { id: 2, category: "feedin", title: "Ponytail Stitch Feedings", description: "10 hr", image: "/assets/hairs/2.jpg" },
                { id: 3, category: "feedin", title: "Back Ponytail Stitch Feed in", description: "10 hr", image: "/assets/hairs/3.png" },
                { id: 4, category: "feedin", title: "Medium Lemonade", description: "10 hr", image: "/assets/hairs/4.png" },
                { id: 5, category: "tribabraids", title: "Medium Tribal Braids", description: "10 hr", image: "/assets/hairs/5.jpg" },
                { id: 6, category: "tribabraids", title: "Design Tribal Braids Big", description: "10 hr", image: "/assets/hairs/6.jpg" },
                { id: 7, category: "sisterlocksbraids", title: "Sisterlocks braids", description: "10 hr", image: "/assets/hairs/7.png" },
                { id: 8, category: "sisterlocksbraids", title: "Sister locks braids", description: "10 hr", image: "/assets/hairs/8.png" },
                // { id: 9, category: "sisterlocksbraids", title: "Girl", description: "Lorem ipsum dolor..", image: "/assets/hairs/9.jpg" },
            ],
            // Active filter
            activeFilter: "all",
        };
    },
    computed: {
        filteredCards() {
            if (this.activeFilter === "all") {
                return this.cards;
            }
            return this.cards.filter(card => card.category === this.activeFilter);
        },
    },
    methods: {
        setFilter(filter) {
            this.activeFilter = filter;
        },
    },
};
</script>

<style scoped>
/* Import Google font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');


#filter-buttons button {
    border-radius: 3px;
    background: #fff;
    border-color: transparent;
}

#filter-buttons button:hover {
    background: #ddd;
}

#filter-buttons button.active {
    color: #fff;
    background: #6c757d;
}

#filterable-cards .card {
    width: 15rem;
    border: 2px solid transparent;
}

#filterable-cards .card.hide {
    display: none;
}

@media (max-width: 600px) {
    #filterable-cards {
        justify-content: center;
    }

    #filterable-cards .card {
        width: calc(100% / 2 - 10px);
    }
}

/*  */
</style>