<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-6">
                Hard Matching Truncation
                <span class="relative whitespace-nowrap inline-block mx-1">
                    <span class="absolute bg-white -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                    <span class="relative text-gray-900 px-1">(HMT)</span>
                </span>
            </h2>
            
            <div class="max-w-6xl mx-auto space-y-5 overflow-y-auto max-h-[85vh]">
                <!-- Fórmula Base -->
                <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl" :style="{ animationDelay: '0s' }">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-5 rounded-2xl">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="text-2xl">📐</span>
                            <h3 class="text-xl font-bold">Selección de Candidatos</h3>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                            <p class="text-lg font-mono font-bold text-white">
                                Candidatos = Top-K mejores contenidos
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Fórmula Modificada -->
                <div class="bg-gradient-to-r from-green-600/30 to-green-500/20 p-0.5 rounded-2xl border-2 border-green-500/50" :style="{ animationDelay: '0.1s' }">
                    <div class="bg-gradient-to-br from-green-950/40 to-green-900/20 p-5 rounded-2xl">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="text-2xl">📏</span>
                            <h3 class="text-xl font-bold">Con HMT: K es Variable</h3>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                            <p class="text-lg font-mono font-bold text-white">
                                Candidatos = Top-<span class="text-green-300 font-bold">K(w(x))</span> mejores contenidos
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Parámetros en Grid -->
                <div class="grid md:grid-cols-2 gap-4">
                    <!-- K(w(x)) -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-green-500 p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.2s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">📏</div>
                            <h4 class="text-base font-bold text-white">K(w(x)): Tamaño del Candidatos</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            <span class="font-bold">El cambio clave.</span> Cuántos candidatos consideramos. Si w(x) es alto, K aumenta (buscamos más amplio).
                        </p>
                    </div>

                    <!-- Cómo Funciona -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-green-400 p-5 rounded-lg hover:bg-white/15 transition-all duration-300" :style="{ animationDelay: '0.3s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white">🔍</div>
                            <h4 class="text-base font-bold text-white">Efecto del Cambio</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            En lugar de mirar siempre los top-20, para usuarios con peso alto miramos top-50 o top-100, encontrando "joyas ocultas" que de otro modo se perderían.
                        </p>
                    </div>

                    <!-- Ejemplo -->
                    <div class="bg-white/10 backdrop-blur-sm border-l-4 border-lime-400 p-5 rounded-lg hover:bg-white/15 transition-all duration-300 md:col-span-2" :style="{ animationDelay: '0.4s' }">
                        <div class="flex items-start gap-3 mb-2">
                            <div class="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-gray-900">💡</div>
                            <h4 class="text-base font-bold text-white">Ejemplo Práctico</h4>
                        </div>
                        <p class="text-white/80 text-sm leading-relaxed ml-11">
                            Usuario común: Top-20. Usuario importante/nicho: Top-100. Esto permite que creadores especializados accedan a usuarios que realmente necesitan su contenido.
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
