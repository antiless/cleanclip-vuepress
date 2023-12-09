<template>
    <div style="position: relative;" class="text-left mx-0">
        <div @mouseover="mouseover = true" @mouseleave="mouseover = false">

            <div class="relative">
                <video preload="none" playsinline="" muted draggable="true" :poster="usecase.poster"
                    class="rounded-xl" ref="videoPlayer">
                    <source :src="usecase.video" type="video/mp4">
                </video>

                <div v-if="(mouseover || !playing) && usecase.video" class="play-button" @click="playVideo">
                    <i class="fas fa-play">
                        <svg v-if="playing" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="sc-8a9c0b15-4 eQFgPn">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7 3.25h-.025c-.445 0-.816 0-1.12.02a2.823 2.823 0 00-.907.19 2.75 2.75 0 00-1.489 1.488c-.12.29-.167.59-.188.907-.021.304-.021.675-.021 1.12v10.05c0 .445 0 .816.02 1.12.022.317.069.617.19.907a2.75 2.75 0 001.488 1.489c.29.12.59.167.907.188.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 001.489-1.488c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12V6.975c0-.445 0-.816-.02-1.12a2.822 2.822 0 00-.19-.907 2.75 2.75 0 00-1.488-1.489c-.29-.12-.59-.167-.907-.188-.304-.021-.675-.021-1.12-.021H7zM5.522 4.845c.077-.032.194-.061.435-.078A17.09 17.09 0 017 4.75c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043v10c0 .476 0 .796-.017 1.043-.017.241-.046.358-.078.435a1.25 1.25 0 01-.677.677c-.077.032-.194.061-.435.078A17.07 17.07 0 017 19.25c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 01-.677-.677c-.032-.077-.061-.194-.078-.435A17.091 17.091 0 014.75 17V7c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677zM17 3.25h-.025c-.445 0-.816 0-1.12.02a2.823 2.823 0 00-.907.19 2.75 2.75 0 00-1.489 1.488c-.12.29-.167.59-.188.907-.021.304-.021.675-.021 1.12v10.05c0 .445 0 .816.02 1.12.022.317.069.617.19.907a2.75 2.75 0 001.488 1.489c.29.12.59.167.907.188.304.021.675.021 1.12.021h.05c.445 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 001.489-1.488c.12-.29.167-.59.188-.907.021-.304.021-.675.021-1.12V6.975c0-.445 0-.816-.02-1.12a2.822 2.822 0 00-.19-.907 2.75 2.75 0 00-1.488-1.489c-.29-.12-.59-.167-.907-.188-.304-.021-.675-.021-1.12-.021H17zm-1.478 1.595c.077-.032.194-.061.435-.078.247-.017.567-.017 1.043-.017s.796 0 1.043.017c.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043v10c0 .476 0 .796-.017 1.043-.017.241-.046.358-.078.435a1.25 1.25 0 01-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017s-.796 0-1.043-.017c-.241-.017-.358-.046-.435-.078a1.25 1.25 0 01-.677-.677c-.032-.077-.061-.194-.078-.435A17.073 17.073 0 0114.75 17V7c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677z"
                                fill="currentColor"></path>
                        </svg>
                        <svg v-if="!playing" width="1em" height="1em" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="sc-8a9c0b15-3 hiHWgU">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.437 4.318l.05.032 8.302 5.337.047.03c.549.353 1.03.662 1.367.957.356.311.698.731.698 1.326 0 .595-.342 1.015-.698 1.326-.337.295-.819.604-1.367.957l-.047.03-8.302 5.337-.05.032c-.637.41-1.186.763-1.642.969-.47.212-1.056.369-1.634.053-.577-.315-.762-.893-.838-1.403-.073-.495-.073-1.147-.073-1.905V6.663v-.059c0-.758 0-1.41.073-1.905.076-.51.261-1.088.838-1.403.578-.316 1.164-.159 1.634.054.456.206 1.005.558 1.642.968zm-2.582.302s.003-.002.013-.002l-.013.002zm.029-.001c.04.003.129.023.294.098.342.154.797.444 1.498.895l8.301 5.337c.61.392.995.642 1.238.854.115.1.162.163.18.193l.003.004-.003.004a.902.902 0 01-.18.193c-.243.213-.627.462-1.238.855l-8.301 5.336c-.701.451-1.156.74-1.498.895a1.02 1.02 0 01-.294.098 1.022 1.022 0 01-.077-.3c-.055-.371-.057-.91-.057-1.744V6.663c0-.833.002-1.373.057-1.744.027-.18.058-.264.077-.3zm-.03 14.761l.014.002c-.01 0-.014-.001-.013-.002zm.038.015c.006.005.009.01.008.01 0 0-.003-.002-.008-.01zm0-14.79c.005-.008.008-.01.008-.01s-.002.005-.008.01z"
                                fill="currentColor"></path>
                        </svg>
                    </i>
                </div>
            </div>
        </div>

        <p class="text-2xl text-slate-900 font-semibold mt-6 mb-0">{{ usecase.title }}
            <Badge v-if="usecase.label" :text="usecase.label" :type="usecase.labelType" vertical="middle" />
        </p>

        <p class="mt-2 text-slate-800">{{ usecase.subtitle }}</p>
        <p v-if="usecase.body" class="mt-2 text-slate-400">{{ usecase.body }}</p>
    </div>
</template>

<script>

export default {
    name: "UseCase",
    props: {
        usecase: {
            title: String,
            subtitle: String,
            body: String,
            video: String,
            poster: String,
            label: String,
            labelType: String
        },
        width: Number
    },
    data() {
        return {
            mouseover: false,
            playing: false
        }
    },
    mounted() {
        console.log("mounted video")
        const videoPlayer = this.$refs.videoPlayer;
        videoPlayer.addEventListener('ended', () => {
            console.log("video play ended")
            videoPlayer.load();
            videoPlayer.autoplay = false;
            this.playing = false;
        })
    },
    computed: {
        paused() {
            return this.playing
        },
        showPlayButton() {
            return !this.playing || this.mouseover
        }
    },
    methods: {
        playVideo() {
            const videoPlayer = this.$refs.videoPlayer;
            if (videoPlayer.paused) {
                videoPlayer.play();
                this.playing = true;
            } else {
                videoPlayer.pause();
                this.playing = false;
            }
        }
    }
}
</script>

<style scoped>
.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.play-button i {
    color: white;
    font-size: 30px;
}
</style>
