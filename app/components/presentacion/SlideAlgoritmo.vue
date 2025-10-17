<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-6">
                Actualización Adaptativa
                <span class="relative whitespace-nowrap inline-block mx-1">
                    <span class="absolute bg-white -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                    <span class="relative text-secondary-purple px-1">Desglose de Parámetros</span>
                </span>
            </h2>
            
            <div class="max-w-6xl mx-auto space-y-5 overflow-y-auto max-h-[85vh]">
                <!-- Fórmula Principal -->
                <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl animate-in" :style="{ animationDelay: '0s' }">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-6 rounded-2xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🧮</span>
                            <h3 class="text-2xl font-bold">La Regla de Actualización</h3>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-5 rounded-xl text-center">
                            <p class="text-2xl font-mono font-bold text-white">
                                w<sup>(t+1)</sup>(x) ∝ w<sup>(t)</sup>(x) · exp(-α·π̄(x))
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Parámetros en Grid -->
                <div class="grid md:grid-cols-2 gap-4">
                    <!-- w^(t+1)(x) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-preuai-green p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.1s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-preuai-green rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">📤</div>
                            <h4 class="text-base font-bold text-white">w<sup>(t+1)</sup>(x): Nuevo Peso</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            Nuestro objetivo. El nuevo peso que tendrá el usuario en el siguiente período de tiempo.
                        </p>
                    </div>

                    <!-- w^(t)(x) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-secondary-purple p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.2s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-secondary-purple rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">⏱️</div>
                            <h4 class="text-base font-bold text-white">w<sup>(t)</sup>(x): Peso Actual</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            El peso actual del usuario. Es nuestro punto de partida para calcular el nuevo peso.
                        </p>
                    </div>

                    <!-- π̄(x) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-preuai-purple p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.3s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-preuai-purple rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">📊</div>
                            <h4 class="text-base font-bold text-white">π̄(x): Utilidad Promedio</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            <span class="font-bold">La señal clave.</span> El nivel de satisfacción que el usuario recibió recientemente. Esto alimenta el sistema.
                        </p>
                    </div>

                    <!-- α -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-preuai-red p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.4s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-preuai-red rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">🔧</div>
                            <h4 class="text-base font-bold text-white">α: Parámetro de Aprendizaje</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            Controla la velocidad de cambios. Valor alto = cambios drásticos; valor bajo = ajustes suaves.
                        </p>
                    </div>

                    <!-- exp() -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-yellow-400 p-5 rounded-lg hover:bg-white/15 transition-all duration-300 md:col-span-2" :style="{ animationDelay: '0.5s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-900">ⓔ</div>
                            <h4 class="text-base font-bold text-white">exp(): Función Exponencial</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            Lo crucial es el <span class="font-bold">signo negativo en el exponente</span>. Como π̄(x) es positiva, siempre obtenemos un número entre 0 y 1.
                        </p>
                    </div>
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
