<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-6">
                Pruebas en Simulación: Datos Sintéticos y MovieLens
            </h2>
            
            <div class="max-w-5xl mx-auto space-y-6">
                <div class="grid md:grid-cols-2 gap-5">
                    <div class="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-xl">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="text-2xl">🧪</span>
                            <h3 class="text-xl font-bold">Entornos</h3>
                        </div>
                        <div class="space-y-3">
                            <div class="bg-white/5 p-3 rounded-lg">
                                <p class="font-bold text-sm mb-1">Sintético</p>
                                <p class="text-white/80 text-sm">Mundo artificial con grupos mayoritarios y minoritarios claros</p>
                            </div>
                            <div class="bg-white/5 p-3 rounded-lg">
                                <p class="font-bold text-sm mb-1">MovieLens-1M</p>
                                <p class="text-white/80 text-sm">Datos reales de recomendación de películas</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-primary-purple/20 to-preuai-purple/20 border-2 border-white/30 p-5 rounded-xl">
                        <div class="flex items-center gap-3 mb-3">
                            <span class="text-2xl">📈</span>
                            <h3 class="text-xl font-bold">Resultados Clave</h3>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-start gap-2">
                                <span class="text-preuai-green text-lg">✓</span>
                                <p class="text-white/90 text-sm">3 mecanismos superan baseline</p>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-preuai-green text-lg">✓</span>
                                <p class="text-white/90 text-sm">"Doble Ascenso": Desatasca equilibrios subóptimos</p>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-preuai-green text-lg">✓</span>
                                <p class="text-white/90 text-sm"><span class="font-bold">HMT</span> = mejor ganancia + menor varianza</p>
                            </div>
                            <div class="flex items-start gap-2">
                                <span class="text-preuai-green text-lg">✓</span>
                                <p class="text-white/90 text-sm">Aumenta utilidad de grupos minoritarios</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white/5 border-2 border-white/30 p-6 rounded-xl">
                    <h3 class="text-lg font-bold text-center mb-4">Patrón "Doble Ascenso"</h3>
                    <div class="bg-white/10 p-6 rounded-lg">
                        <div class="flex items-center justify-center gap-4 text-center">
                            <div class="flex flex-col items-center">
                                <div class="text-3xl mb-2">📊</div>
                                <p class="text-sm text-white/80">Baseline estancado</p>
                            </div>
                            <div class="text-3xl text-white/40">→</div>
                            <div class="flex flex-col items-center">
                                <div class="text-3xl mb-2">📉</div>
                                <p class="text-sm text-white/80">Descenso inicial</p>
                            </div>
                            <div class="text-3xl text-white/40">→</div>
                            <div class="flex flex-col items-center">
                                <div class="text-3xl mb-2">📈</div>
                                <p class="text-sm text-preuai-green font-bold">Ascenso recuperado</p>
                            </div>
                            <div class="text-3xl text-white/40">→</div>
                            <div class="flex flex-col items-center">
                                <div class="text-3xl mb-2">🚀</div>
                                <p class="text-sm text-preuai-green font-bold">Superación de baseline</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-center text-white/70 text-sm mt-4">
                        La curva de HMT muestra la mayor mejora y estabilidad
                    </p>
                </div>
                
                <div class="bg-preuai-green/10 border border-preuai-green/30 p-5 rounded-xl">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 bg-preuai-correct-green rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                            ⚖️
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2">Equidad</h3>
                            <p class="text-white/90 text-sm leading-relaxed">
                                Los mecanismos logran aumentar la utilidad de los grupos minoritarios, 
                                a veces a un pequeño costo para los grupos mayoritarios, pero logrando un 
                                <span class="font-bold">resultado global mejor</span>.
                            </p>
                        </div>
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
