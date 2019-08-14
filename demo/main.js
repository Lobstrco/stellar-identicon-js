var randomAddressButton = document.getElementById('random-address'),
    stellarAddressInput = document.getElementsByName('stellar_address')[0];

function updateIcons (address) {
    stellarAddressInput.value = address;

    var image = document.getElementById('image');
    image.src = "https://id.lobstr.co/" + address + ".png";

    drawIdenticon(document.getElementById('existing-canvas'), address);
}

randomAddressButton.onclick = function () {
    var address = StellarSdk.Keypair.random().publicKey();
    updateIcons(address);
};
randomAddressButton.onclick();

var stellarAddressChangeHandler = function () {
    try {
        StellarSdk.Keypair.fromPublicKey(this.value);
        updateIcons(this.value);
    } catch (e) {
        console.log("Invalid stellar address");
    }
};


stellarAddressInput.onchange = function () {
    try {
        StellarSdk.Keypair.fromPublicKey(this.value);
        updateIcons(this.value);
        this.parentNode.classList.remove("has-error");
    } catch (e) {
        this.parentNode.classList.add("has-error");
    }
};

var timerId = null;
stellarAddressInput.oninput = function () {
    this.parentNode.classList.remove("has-error");
    if (timerId) {
        clearTimeout(timerId);
    }

    try {
        StellarSdk.Keypair.fromPublicKey(this.value);
        updateIcons(this.value);
    } catch (e) {
        var that = this;
        timerId = setTimeout(function () {
            that.parentNode.classList.add("has-error")
        }, 2000);
    }
};
