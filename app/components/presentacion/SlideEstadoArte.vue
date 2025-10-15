<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                ¿Qué se ha hecho y qué aporta este trabajo?
            </h2>
            
            <div class="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <!-- Estado del Arte -->
                <div class="space-y-4">
                    <div class="bg-white/5 border border-white/30 p-5 rounded-xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">📚</span>
                            <h3 class="text-2xl font-bold">Estado del Arte</h3>
                        </div>
                        
                        <div class="space-y-3">
                            <div class="bg-white/5 p-4 rounded-lg">
                                <p class="text-white/90 text-sm leading-relaxed">
                                    ✓ Modelos teóricos de juegos para estas interacciones 
                                    <span class="text-white/60">(Ben-Porat & Tennenholtz, 2017)</span>
                                </p>
                            </div>
                            <div class="bg-white/5 p-4 rounded-lg">
                                <p class="text-white/90 text-sm leading-relaxed">
                                    ✓ Incentivos o contratos de pago para los creadores 
                                    <span class="text-white/60">(Zhu et al., 2023)</span>
                                </p>
                            </div>
                        </div>
                        
                        <div class="mt-4 bg-preuai-red/20 border border-preuai-red/40 p-4 rounded-lg">
                            <p class="text-sm font-bold mb-1">⚠️ Limitación Clave:</p>
                            <p class="text-white/80 text-sm leading-relaxed">
                                Asumen que los creadores son perfectamente racionales y capaces de 
                                encontrar un equilibrio óptimo (Equilibrio de Nash), lo cual es poco realista.
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Contribuciones -->
                <div class="space-y-4">
                    <div class="bg-gradient-to-br from-primary-purple/20 to-preuai-purple/20 border-2 border-white/30 p-5 rounded-xl">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-3xl">✨</span>
                            <h3 class="text-2xl font-bold">Contribuciones</h3>
                        </div>
                        
                        <div class="space-y-3">
                            <div 
                                v-for="(contrib, index) in contribuciones" 
                                :key="index"
                                class="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/15 transition-all duration-300"
                                :style="{ animationDelay: `${index * 0.15}s` }"
                            >
                                <div class="flex items-start gap-3">
                                    <div class="w-8 h-8 bg-gradient-to-br from-preuai-green to-preuai-correct-green rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                        {{ index + 1 }}
                                    </div>
                                    <p class="text-white/90 text-sm leading-relaxed">{{ contrib }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const contribuciones = [
    'Formaliza el problema en un entorno competitivo sin asumir racionalidad perfecta, usando un concepto más práctico de "Equilibrio Local de Nash".',
    'Propone 3 mecanismos de intervención prácticos (UIR, SMT, HMT) que la plataforma puede usar para guiar a los creadores, ajustando recompensas o probabilidades de matching.',
    'Valida la solución de manera robusta con simulaciones offline y, crucialmente, con un experimento online A/B de 3 semanas en una plataforma líder de videos cortos.'
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

.animate-fade-in > div > div > div > div {
    animation: fade-in 0.6s ease-out backwards;
}
</style>
