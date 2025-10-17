<template>
    <div 
        @click="nextSlide" 
        @keydown.right="nextSlide"
        @keydown.left="prevSlide"
        @keydown.escape="resetPresentation"
        tabindex="0"
        class="cursor-pointer focus:outline-none w-screen h-screen bg-gradient-to-br from-gradient-start to-gradient-end overflow-hidden"
    >
        <Transition :name="transitionName" mode="out-in">
            <component :is="slides[currentSlide]" :key="currentSlide" />
        </Transition>
        
        <!-- Indicador de progreso -->
        <div class="fixed bottom-6 right-6 text-white/60 text-lg font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            {{ currentSlide + 1 }} / {{ slides.length }}
        </div>
        
        <!-- Botón reset -->
        <button 
            v-if="currentSlide > 0"
            @click.stop="resetPresentation"
            class="fixed top-6 left-6 text-white/60 hover:text-white text-lg font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full transition-colors duration-200 flex items-center gap-2"
        >
            ← Inicio
        </button>
        
        <!-- Controles de navegación -->
        <div class="fixed bottom-6 left-6 flex items-center gap-3">
            <button 
                v-if="currentSlide > 0"
                @click.stop="prevSlide"
                class="text-white/60 hover:text-white bg-black/30 backdrop-blur-sm w-10 h-10 rounded-full transition-colors duration-200 flex items-center justify-center"
                title="Anterior (←)"
            >
                ←
            </button>
            <button 
                v-if="currentSlide < slides.length - 1"
                @click.stop="nextSlide"
                class="text-white/60 hover:text-white bg-black/30 backdrop-blur-sm w-10 h-10 rounded-full transition-colors duration-200 flex items-center justify-center"
                title="Siguiente (→)"
            >
                →
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SlidePortada from '~/components/presentacion/SlidePortada.vue';
import SlideAgenda from '~/components/presentacion/SlideAgenda.vue';
import SlideContexto from '~/components/presentacion/SlideContexto.vue';
import SlideProblema from '~/components/presentacion/SlideProblema.vue';
import SlideCreatorStrategies from '~/components/presentacion/SlideCreatorStrategies.vue';
import SlideEstadoArte from '~/components/presentacion/SlideEstadoArte.vue';
import SlideFormalizacion from '~/components/presentacion/SlideFormalizacion.vue';
import SlideSolucionIdea from '~/components/presentacion/SlideSolucionIdea.vue';
import SlideMecanismos from '~/components/presentacion/SlideMecanismos.vue';
import SlideAlgoritmo from '~/components/presentacion/SlideAlgoritmo.vue';
import SlideEvaluacionOffline from '~/components/presentacion/SlideEvaluacionOffline.vue';
import SlideDatasetResults from '~/components/presentacion/SlideDatasetResults.vue';
import SlideEvaluacionOnline from '~/components/presentacion/SlideEvaluacionOnline.vue';
import SlideResultados from '~/components/presentacion/SlideResultados.vue';
import SlideConclusiones from '~/components/presentacion/SlideConclusiones.vue';
import SlideReferencias from '~/components/presentacion/SlideReferencias.vue';
import SlideGracias from '~/components/presentacion/SlideGracias.vue';

useHead({
    title: 'Presentación de Sistemas Recomendadores',
    meta: [
        { name: 'description', content: 'Presentación IIC3636 - Sistemas Recomendadores' },
    ],
});

const slides = [
    SlidePortada,
    SlideAgenda,
    SlideContexto,
    SlideProblema,
    SlideCreatorStrategies,
    SlideEstadoArte,
    SlideFormalizacion,
    SlideSolucionIdea,
    SlideMecanismos,
    SlideAlgoritmo,
    SlideEvaluacionOffline,
    SlideDatasetResults,
    SlideEvaluacionOnline,
    SlideResultados,
    SlideConclusiones,
    SlideReferencias,
    SlideGracias,
];

const currentSlide = ref(0);
const transitionName = ref('slide-next');

const nextSlide = () => {
    if (currentSlide.value < slides.length - 1) {
        transitionName.value = 'slide-next';
        currentSlide.value++;
    }
};

const prevSlide = () => {
    if (currentSlide.value > 0) {
        transitionName.value = 'slide-prev';
        currentSlide.value--;
    }
};

const resetPresentation = () => {
    transitionName.value = 'slide-prev';
    currentSlide.value = 0;
};

// Auto-focus para keyboard navigation
onMounted(() => {
    document.querySelector('[tabindex="0"]')?.focus();
});

// Prevent default arrow key scrolling
const handleKeyDown = (e) => {
    if (['ArrowLeft', 'ArrowRight', 'Escape'].includes(e.key)) {
        e.preventDefault();
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
/* Transición hacia adelante */
.slide-next-enter-active,
.slide-next-leave-active {
    transition: all 0.5s ease-out;
}

.slide-next-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.slide-next-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}

/* Transición hacia atrás */
.slide-prev-enter-active,
.slide-prev-leave-active {
    transition: all 0.5s ease-out;
}

.slide-prev-enter-from {
    opacity: 0;
    transform: translateX(-100%);
}

.slide-prev-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
