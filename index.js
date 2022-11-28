const dog = {
    name: "Чарли",
    type: "Собака",
    makeSound() {
        return "Гав-Гав";
    }
}

const bird = {
    name: "Петя",
    type: "Воробей",
    makeSound() {
        return "Чик-чирик";
    }
}

function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
    return {
        name: this.name,
        type: this.type,
        isDomestic,
        makeSound: this.makeSound
    }
}

const bindDog = makeDomestic.bind(dog);
bindDog(true);
makeDomestic.apply(bird, [false]);
makeDomestic.call(bird, false);

