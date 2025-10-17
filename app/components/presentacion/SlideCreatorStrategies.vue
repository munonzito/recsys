<template>
    <PresentacionSlide>
        <div class="animate-fade-in h-full flex flex-col justify-center items-center px-6">
            <h2 class="text-4xl font-bold text-center mb-8">
                Estrategias de Creadores
            </h2>
            
            <div class="flex-1 flex items-center justify-center w-full">
                <div class="bg-gradient-to-r from-primary-purple to-secondary-purple p-1 rounded-2xl shadow-2xl">
                    <div class="bg-gradient-to-br from-gradient-start to-gradient-end p-4 rounded-2xl">
                        <img 
                            src="/img/creator_strategies.png" 
                            alt="Creator Strategies"
                            class="max-h-full max-w-5xl w-full object-contain rounded-lg"
                        />
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
