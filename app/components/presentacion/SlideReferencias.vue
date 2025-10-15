<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">
                Referencias Clave
            </h2>
            
            <div class="max-w-4xl mx-auto space-y-5">
                <div 
                    v-for="(ref, index) in referencias" 
                    :key="index"
                    class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/15 transition-all duration-300"
                    :style="{ animationDelay: `${index * 0.15}s` }"
                >
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg">
                            {{ index + 1 }}
                        </div>
                        <div class="flex-1">
                            <p class="text-white/90 text-base leading-relaxed mb-2">
                                <span class="font-bold">{{ ref.autores }}</span> ({{ ref.año }})
                            </p>
                            <p class="text-white/80 text-sm italic mb-2">{{ ref.titulo }}</p>
                            <p class="text-white/60 text-xs">{{ ref.descripcion }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-10 text-center">
                <div class="inline-flex items-center gap-3 bg-white/5 border border-white/30 px-6 py-3 rounded-full">
                    <span class="text-2xl">📚</span>
                    <p class="text-white/70 text-sm">
                        Paper principal: <span class="font-bold text-white">Yao et al. (2024) - arXiv</span>
                    </p>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const referencias = [
    {
        autores: 'Yao et al.',
        año: '2023a',
        titulo: 'How bad is top-k recommendation under competing content creators?',
        descripcion: 'El trabajo previo de los mismos autores que introdujo el framework C³'
    },
    {
        autores: 'Ben-Porat and Tennenholtz',
        año: '2017, 2018',
        titulo: 'A game-theoretic approach to recommendation systems with strategic content providers',
        descripcion: 'Trabajo seminal en la aplicación de teoría de juegos a sistemas recomendadores'
    },
    {
        autores: 'Arora, Hazan, and Kale',
        año: '2012',
        titulo: 'The multiplicative weights update method: a meta-algorithm and applications',
        descripcion: 'El paper clásico sobre el algoritmo de actualización de pesos utilizado en este trabajo'
    },
    {
        autores: 'Zhu et al.',
        año: '2023',
        titulo: 'Incentive mechanisms for content creators',
        descripcion: 'Propuestas de incentivos y contratos de pago para creadores de contenido'
    }
];
</script>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out;
}

.animate-fade-in > div > div {
    animation: fade-in 0.6s ease-out backwards;
}
</style>
