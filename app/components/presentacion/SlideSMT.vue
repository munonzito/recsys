<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-6">
                Soft Matching Truncation
                <span class="relative whitespace-nowrap inline-block mx-1">
                    <span class="absolute bg-white -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                    <span class="relative text-gray-900 px-1">(SMT)</span>
                </span>
            </h2>
            
            <div class="max-w-6xl mx-auto space-y-5 overflow-y-auto max-h-[85vh]">
                <!-- Fórmula Base -->
                <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl" :style="{ animationDelay: '0s' }">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-5 rounded-2xl">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="text-2xl">📐</span>
                            <h3 class="text-xl font-bold">Probabilidad con Softmax</h3>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                            <p class="text-lg font-mono font-bold text-white">
                                P<sub>i</sub>(s, x) ∝ exp(σ(s<sub>i</sub>, x) / β)
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Fórmula Modificada -->
                <div class="bg-gradient-to-r from-blue-600/30 to-blue-500/20 p-0.5 rounded-2xl border-2 border-blue-500/50" :style="{ animationDelay: '0.1s' }">
                    <div class="bg-gradient-to-br from-blue-950/40 to-blue-900/20 p-5 rounded-2xl">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="text-2xl">🌡️</span>
                            <h3 class="text-xl font-bold">Con SMT: La Temperatura</h3>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                            <p class="text-lg font-mono font-bold text-white">
                                P<sub>i</sub>(s, x) ∝ exp(σ(s<sub>i</sub>, x) / <span class="text-blue-300 font-bold">β(w(x))</span>)
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Parámetros en Grid -->
                <div class="grid md:grid-cols-2 gap-4">
                    <!-- σ(s_i, x) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-blue-500 p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.2s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">⭐</div>
                            <h4 class="text-base font-bold text-white">σ(s<sub>i</sub>, x): Relevancia</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            La puntuación de relevancia entre el contenido s<sub>i</sub> y el usuario x. Qué tan bueno es el match.
                        </p>
                    </div>

                    <!-- β(w(x)) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-blue-400 p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.3s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">🌡️</div>
                            <h4 class="text-base font-bold text-white">β(w(x)): Temperatura</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            <span class="font-bold">El cambio clave.</span> Depende del peso w(x). Temperatura alta = distribución plana (más oportunidades).
                        </p>
                    </div>

                    <!-- Explicación Softmax -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-cyan-400 p-5 rounded-lg hover:bg-white/15 transition-all duration-300 md:col-span-2" :style="{ animationDelay: '0.4s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-900">📊</div>
                            <h4 class="text-base font-bold text-white">Cómo Funciona la Temperatura</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            Una temperatura baja concentra probabilidad en el mejor (top-1). Una temperatura alta distribuye probabilidad entre varios buenos candidatos, dando oportunidad a creadores que no son el #1.
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
