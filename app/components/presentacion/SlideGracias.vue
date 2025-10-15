<template>
    <PresentacionSlide>
        <div class="flex flex-col items-center justify-center gap-10 text-center animate-fade-in h-full">
            <div class="space-y-8">
                <div class="flex items-center justify-center gap-4">
                    <div class="w-24 h-24 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-2xl flex items-center justify-center text-6xl animate-bounce-slow">
                        🙋
                    </div>
                </div>
                
                <h1 class="text-5xl lg:text-6xl font-extrabold">
                    ¡Gracias!
                </h1>
                
                <div class="w-24 h-1 bg-gradient-to-r from-primary-purple via-preuai-purple to-secondary-purple rounded-full mx-auto"></div>
                
                <h2 class="text-3xl lg:text-4xl font-bold text-white/90">
                    ¿Preguntas?
                </h2>
            </div>
            
            <div class="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-8 rounded-2xl max-w-3xl">
                <div class="space-y-4">
                    <div>
                        <p class="text-sm text-white/70 mb-2">Presentado por:</p>
                        <p class="text-xl font-bold">
                            Martín Muñoz, Eduardo Soto, Randall Biermann
                        </p>
                    </div>
                    <div class="w-16 h-0.5 bg-white/30 rounded-full mx-auto"></div>
                    <div>
                        <p class="text-lg text-white/90">
                            IIC3633 - Sistemas Recomendadores (2025-2)
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center gap-6 text-4xl">
                <span class="hover:scale-125 transition-transform duration-300">📊</span>
                <span class="hover:scale-125 transition-transform duration-300">🤖</span>
                <span class="hover:scale-125 transition-transform duration-300">🎯</span>
                <span class="hover:scale-125 transition-transform duration-300">🚀</span>
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

@keyframes bounce-slow {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out;
}

.animate-bounce-slow {
    animation: bounce-slow 2s ease-in-out infinite;
}
</style>
