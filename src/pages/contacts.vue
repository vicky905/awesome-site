<template>
    <div class="contacts">
        <div class="heading">
            <div class="contacts">
                <h1 v-if="onClick === false">Contacts have never been that easy</h1>
                <h1 v-if="onClick === true">We are looking forward to giving you a message</h1>
            </div>
        </div>
        <div class="remove">
            <div class="input">
                <div v-if="!onClick" class="input-df">
                    <input class="input input-name" placeholder="Your Name" type="text" />
                    <input class="input input-email" placeholder="Your Email" type="text" />
                    <textarea class="input textarea" placeholder="Your Message is important to us"></textarea>
                    <button class="input submit-button" @click="onClick = !onClick">Submit</button>
                </div>
                <transition
                    name="bounce"
                    :duration="600"
                    @after-enter="triggerFeetAnimation = true"
                >
                    <div class="photos" v-if="onClick">
                        <img class="done-img" src="../assets/checkmark.png" />

                        <transition name="fade">
                            <div v-if="triggerFeetAnimation">
                                <img class="foot-img" src="../assets/footprints2.png" />
                            </div>
                        </transition>

                        <img class="operator-img" src="../assets/operator.png" />
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Aboutpage',
  data() {
    return {
      onClick: false,
      triggerFeetAnimation: false
    }
  },
}
</script>

<style>
.heading {
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    justify-content: flex-start;
}

.contacts {
    font-size: 35%;
}

.input {
    border-radius: 4px;
    margin: 8px 0;
    padding: 5px 40px;
    display: flex;
}

.input-email {
    border: 3px solid rgba(245, 211, 99);
    display: block;

    margin-top: 30px;
    margin-bottom: 30px;
}

.input-name {
    border: 3px solid rgba(245, 211, 99);
    display: block;
}

.textarea {
    border: 3px solid rgba(245, 211, 99);
    display: block;
}

::placeholder {
    color: #3a42af;
}

.submit-button {
    border: none;
    background-color: #f5d363;
    padding: 15px 15px;
    font-size: 16px;
    display: block;

    margin-left: 0 auto;
}

.operator-img {
    height: 270px;
    width: auto;
    display: block;
}

.input-df {
    display: flex;
    flex-direction: column;
}

.done-img {
    position: relative;
    height: 270px;
    width: auto;
}

.foot-img {
    height: 250px;
    width: auto;
}

.photos {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>