<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                ¡Resultados 
                <span class="relative whitespace-nowrap inline-block mx-1">
                    <span class="absolute bg-preuai-green -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                    <span class="relative text-gradient-start px-1">Positivos</span>
                </span> 
                y Estadísticamente Significativos!
            </h2>
            
            <div class="max-w-5xl mx-auto space-y-6">
                <div class="bg-gradient-to-r from-preuai-green to-preuai-correct-green p-0.5 rounded-2xl">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-6 rounded-2xl">
                        <div class="flex items-center justify-center gap-3 mb-5">
                            <span class="text-3xl">👥</span>
                            <h3 class="text-2xl font-bold">Para los Usuarios</h3>
                        </div>
                        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div 
                                v-for="(metrica, index) in metricasUsuarios" 
                                :key="index"
                                class="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center"
                                :style="{ animationDelay: `${index * 0.1}s` }"
                            >
                                <div class="text-3xl font-extrabold text-preuai-green mb-2">{{ metrica.valor }}</div>
                                <p class="text-sm font-semibold mb-1">{{ metrica.metrica }}</p>
                                <p class="text-xs text-white/70">{{ metrica.descripcion }}</p>
                            </div>
                        </div>
                        <div class="mt-4 bg-white/10 p-4 rounded-lg">
                            <p class="text-center text-sm text-white/90">
                                ⭐ Los grupos de usuarios más pequeños vieron las <span class="font-bold text-preuai-green">mayores ganancias en LTR</span>, 
                                validando la hipótesis
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-6 rounded-xl">
                    <div class="flex items-center justify-center gap-3 mb-5">
                        <span class="text-3xl">🎬</span>
                        <h3 class="text-2xl font-bold">Para los Creadores</h3>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-white/5 p-5 rounded-lg">
                            <div class="text-3xl font-extrabold text-preuai-green mb-2">+0.17%</div>
                            <p class="text-base font-semibold mb-1">Usuarios Activos Diarios</p>
                            <p class="text-sm text-white/70">Para creadores populares</p>
                        </div>
                        <div class="bg-white/5 p-5 rounded-lg flex items-center justify-center">
                            <div class="text-center">
                                <div class="text-4xl mb-2">📈</div>
                                <p class="text-sm font-semibold">Tendencia Creciente</p>
                                <p class="text-xs text-white/70">A lo largo de las 3 semanas</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-5 rounded-2xl">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                                🎉
                            </div>
                            <div>
                                <h3 class="text-lg font-bold mb-2">Conclusión del Experimento</h3>
                                <p class="text-white/90 text-base leading-relaxed">
                                    El mecanismo no solo mejora el <span class="font-bold">bienestar y la diversidad para los usuarios</span>, 
                                    sino que también tiene un <span class="font-bold text-preuai-green">impacto positivo en el engagement de los creadores</span>. 
                                    Esto demuestra que alinear los incentivos beneficia a todo el ecosistema.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const metricasUsuarios = [
    {
        valor: '+1.13%',
        metrica: 'LTR',
        descripcion: 'Satisfacción del usuario'
    },
    {
        valor: '+0.76%',
        metrica: 'Cold-start',
        descripcion: 'Contenido nuevo'
    },
    {
        valor: '+0.71%',
        metrica: 'Diversidad',
        descripcion: 'Temas distintos'
    },
    {
        valor: '🎯',
        metrica: 'Grupos Nicho',
        descripcion: 'Mayores ganancias'
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

.animate-fade-in > div > div > div > div {
    animation: fade-in 0.6s ease-out backwards;
}
</style>
