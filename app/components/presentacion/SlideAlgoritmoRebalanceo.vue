<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                ¿Cómo se calculan los pesos? 
                <span class="relative whitespace-nowrap inline-block mx-1">
                    <span class="absolute bg-white -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                    <span class="relative text-secondary-purple px-1">Algoritmo Adaptativo</span>
                </span>
            </h2>
            
            <div class="max-w-5xl mx-auto space-y-6">
                <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-6 rounded-2xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">🧮</span>
                            <h3 class="text-2xl font-bold">Multiplicative Weight Update</h3>
                        </div>
                        <div class="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center">
                            <p class="text-3xl font-mono font-bold mb-2">
                                w<sup>(t+1)</sup>(x) ∝ w<sup>(t)</sup>(x) · exp(-α·π̄(x))
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-5">
                    <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-xl">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-preuai-correct-green/20 border-2 border-preuai-correct-green rounded-lg flex items-center justify-center text-2xl">
                                😊
                            </div>
                            <h3 class="text-xl font-bold">Usuario Satisfecho</h3>
                        </div>
                        <p class="text-white/90 text-base leading-relaxed">
                            Si π̄(x) es <span class="font-bold text-preuai-green">alto</span> 
                            → su peso <span class="font-bold">w(x) disminuye</span> para la siguiente ronda
                        </p>
                    </div>
                    
                    <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-xl">
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-preuai-red/20 border-2 border-preuai-red rounded-lg flex items-center justify-center text-2xl">
                                😞
                            </div>
                            <h3 class="text-xl font-bold">Usuario Insatisfecho</h3>
                        </div>
                        <p class="text-white/90 text-base leading-relaxed">
                            Si π̄(x) es <span class="font-bold text-preuai-red">bajo</span> 
                            → su peso <span class="font-bold">w(x) aumenta</span> para la siguiente ronda
                        </p>
                    </div>
                </div>
                
                <div class="bg-white/5 border-2 border-white/30 p-6 rounded-xl">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-3xl">🔄</span>
                        <h3 class="text-xl font-bold">Proceso Iterativo (Algoritmo 1)</h3>
                    </div>
                    <div class="grid md:grid-cols-3 gap-3">
                        <div class="bg-white/10 p-4 rounded-lg text-center">
                            <p class="font-bold text-lg mb-2">1️⃣</p>
                            <p class="text-white/90 text-sm">Desplegar pesos actuales</p>
                        </div>
                        <div class="bg-white/10 p-4 rounded-lg text-center">
                            <p class="font-bold text-lg mb-2">2️⃣</p>
                            <p class="text-white/90 text-sm">Observar utilidad de usuarios</p>
                        </div>
                        <div class="bg-white/10 p-4 rounded-lg text-center">
                            <p class="font-bold text-lg mb-2">3️⃣</p>
                            <p class="text-white/90 text-sm">Actualizar pesos con fórmula</p>
                        </div>
                    </div>
                    <p class="text-center text-white/70 text-sm mt-4">
                        ⟲ Sistema que se auto-corrige continuamente
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
