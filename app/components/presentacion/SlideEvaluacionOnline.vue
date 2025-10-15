<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                La Prueba de Fuego: 
                <span class="relative whitespace-nowrap inline-block mx-1">
                    <span class="absolute bg-white -left-1 -top-0.5 -bottom-0.5 -right-1 -rotate-1"></span>
                    <span class="relative text-secondary-purple px-1">Experimento en Plataforma Real</span>
                </span>
            </h2>
            
            <div class="max-w-5xl mx-auto space-y-6">
                <div class="grid md:grid-cols-2 gap-5">
                    <div 
                        v-for="(item, index) in detalles" 
                        :key="index"
                        class="bg-white/10 backdrop-blur-sm border border-white/20 p-5 rounded-xl hover:bg-white/15 transition-all duration-300"
                        :style="{ animationDelay: `${index * 0.15}s` }"
                    >
                        <div class="flex items-center gap-3 mb-3">
                            <div class="w-12 h-12 bg-gradient-to-br from-primary-purple to-secondary-purple rounded-xl flex items-center justify-center text-2xl">
                                {{ item.icono }}
                            </div>
                            <h3 class="text-lg font-bold">{{ item.titulo }}</h3>
                        </div>
                        <p class="text-white/90 text-sm leading-relaxed">{{ item.descripcion }}</p>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-6 rounded-2xl">
                        <h3 class="text-xl font-bold text-center mb-6">Configuración del A/B Test</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="bg-white/20 backdrop-blur-sm p-5 rounded-xl">
                                <div class="flex items-center justify-center gap-3 mb-3">
                                    <span class="text-3xl">🅰️</span>
                                    <h4 class="text-xl font-bold">Grupo Control</h4>
                                </div>
                                <div class="space-y-2 text-sm">
                                    <p class="text-white/90">• 3% de usuarios</p>
                                    <p class="text-white/90">• 3% de creadores</p>
                                    <p class="text-white/80 italic">Sin modificaciones</p>
                                </div>
                            </div>
                            <div class="bg-white/20 backdrop-blur-sm p-5 rounded-xl border-2 border-preuai-green/50">
                                <div class="flex items-center justify-center gap-3 mb-3">
                                    <span class="text-3xl">🅱️</span>
                                    <h4 class="text-xl font-bold">Grupo Experimento</h4>
                                </div>
                                <div class="space-y-2 text-sm">
                                    <p class="text-white/90">• 3% de usuarios</p>
                                    <p class="text-white/90">• 3% de creadores</p>
                                    <p class="text-preuai-green font-bold">Con mecanismo HMT</p>
                                </div>
                            </div>
                        </div>
                        <p class="text-center text-white/70 text-sm mt-4">
                            ⚡ Test simétrico sin contaminación entre grupos
                        </p>
                    </div>
                </div>
                
                <div class="bg-white/5 border-2 border-white/30 p-5 rounded-xl text-center">
                    <p class="text-lg text-white/90">
                        Duración: <span class="font-bold text-preuai-green">3 semanas</span> · 
                        Plataforma: <span class="font-bold text-preuai-green">Líder mundial en videos cortos</span> · 
                        Usuarios: <span class="font-bold text-preuai-green">Millones</span>
                    </p>
                </div>
            </div>
        </div>
    </PresentacionSlide>
</template>

<script setup>
const detalles = [
    {
        icono: '📱',
        titulo: 'Contexto',
        descripcion: 'A/B test de 3 semanas en una de las plataformas de videos cortos más grandes del mundo'
    },
    {
        icono: '🎯',
        titulo: 'Mecanismo Elegido',
        descripcion: 'HMT, por su gran rendimiento offline y su facilidad de implementación (solo cambiar número de candidatos)'
    },
    {
        icono: '📊',
        titulo: 'Métrica de Utilidad',
        descripcion: 'Like-Through-Rate (LTR): proporción de likes por impresión'
    },
    {
        icono: '🔬',
        titulo: 'Configuración',
        descripcion: 'Test A/B simétrico con grupos aislados para evitar contaminación entre control y experimento'
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
