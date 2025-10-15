<template>
    <PresentacionSlide>
        <div class="flex flex-col items-center justify-center gap-8 text-center animate-fade-in h-full">
            <div class="space-y-6 max-w-5xl">
                <div class="flex items-center justify-center gap-4 mb-4">
                    <div class="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                        <span class="text-5xl">📊</span>
                    </div>
                </div>
                
                <h1 class="text-3xl lg:text-5xl font-extrabold leading-tight">
                    User Welfare Optimization in Recommender Systems with 
                    <span class="relative whitespace-nowrap inline-block mx-1">
                        <span class="absolute bg-white -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                        <span class="relative text-secondary-purple px-1">Competing Content Creators</span>
                    </span>
                </h1>
                
                <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl max-w-3xl mx-auto">
                    <p class="text-lg text-white/90 mb-2">
                        <span class="font-bold">Autores:</span> Fan Yao, Yiming Liao, Mingzhe Wu, et al.
                    </p>
                    <p class="text-base text-white/80">
                        arXiv, 2024
                    </p>
                </div>
                
                <div class="mt-8 flex flex-col items-center gap-3">
                    <div class="w-16 h-0.5 bg-white/50 rounded-full"></div>
                    <p class="text-xl text-white/90">
                        <span class="font-bold">Integrantes:</span> Martín Muñoz, Eduardo Soto, Randall Biermann
                    </p>
                    <p class="text-lg text-white/80">
                        IIC3633 - Sistemas Recomendadores (2025-2)
                    </p>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
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
</style>
