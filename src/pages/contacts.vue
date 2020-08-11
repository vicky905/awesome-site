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
                <transition name="submitted">
                    <transition name="onClick">
                        <div class="photos" v-if="onClick">
                            <img class="done-img" src="../assets/checkmark.png" />
                            <div v-if="submitted">
                                <img class="foot-img" src="../assets/footprints2.png" />
                                <img class="foot-img" src="../assets/footprints2.png" />
                            </div>
                            <img class="operator-img" src="../assets/operator.png" />
                        </div>
                    </transition>
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
      submitted:false,
      
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
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    height: 270px;
    width: auto;
    display: block;
    margin-left: auto;
}

.input-df {
    display: flex;
    flex-direction: column;
}

.done-img {
    position: relative;
    height: 290px;
    width: auto;
}

.onClick-enter-active {
    animation: bounce-in 0.4s;
}

.onClick-enter-active {
    animation: bounce-in 0.4s reverse;
}

@keyframes onClick {
    from {
        top: 0px;
    }
    to {
        top: 200px;
    }
}

.submitted-enter-active {
    animation: bounce-in 0.4s;
}

.submitted-enter-active {
    animation: bounce-in 0.4s reverse;
}

@keyframes submitted {
    from {
        top: 0px;
    }
    to {
        top: 200px;
    }
}
.foot-img {
    height: 300px;
    width: auto;
}

.photos {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>