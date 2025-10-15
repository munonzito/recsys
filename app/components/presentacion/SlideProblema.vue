<template>
    <PresentacionSlide>
        <div class="animate-fade-in">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-8">
                ¿Por Qué Falla el Ecosistema?
            </h2>
            
            <div class="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
                <div class="bg-white/10 backdrop-blur-sm border-2 border-preuai-red/50 p-6 rounded-xl">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-3xl">⚠️</span>
                        <h3 class="text-2xl font-bold text-preuai-red">Causa Principal</h3>
                    </div>
                    <p class="text-white/90 text-base leading-relaxed">
                        Los creadores tienden a perseguir tendencias y enfocarse en los grupos de usuarios 
                        <span class="font-bold text-white">mayoritarios</span>. ¿Por qué? Porque tienen una 
                        <span class="relative whitespace-nowrap inline-block mx-1">
                            <span class="absolute bg-white -left-0.5 -top-0.5 -bottom-0.5 -right-0.5 -rotate-1"></span>
                            <span class="relative text-secondary-purple px-0.5">visión miope y local</span>
                        </span>
                        ; no conocen la distribución global de preferencias de todos los usuarios.
                    </p>
                </div>
                
                <div class="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-6 rounded-xl">
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-3xl">❌</span>
                        <h3 class="text-2xl font-bold">Consecuencia</h3>
                    </div>
                    <p class="text-white/90 text-base leading-relaxed">
                        Esto lleva a una <span class="font-bold text-white">falta de diversidad de contenido</span>. 
                        Los grupos de usuarios "nicho" o minoritarios quedan desatendidos, lo que resulta en un 
                        bienestar de usuario subóptimo para el ecosistema en general.
                    </p>
                </div>
            </div>
            
            <div class="bg-gradient-to-r from-primary-purple to-preuai-purple p-0.5 rounded-2xl max-w-4xl mx-auto">
                <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-6 rounded-2xl">
                    <div class="flex items-start gap-4">
                        <div class="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-3xl">
                            💡
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">El Rol de la Plataforma</h3>
                            <p class="text-white/90 text-base leading-relaxed">
                                El paper argumenta que no es culpa del creador, sino 
                                <span class="font-bold text-white">responsabilidad de la plataforma</span> 
                                usar su ventaja informativa para guiar a los creadores hacia donde más se les necesita.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-6 text-center">
                <p class="text-white/70 text-sm">
                    Visualización: Creadores agrupados en el centro, usuarios en extremos desatendidos
                </p>
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
