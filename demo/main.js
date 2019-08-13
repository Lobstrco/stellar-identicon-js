var randomAddressButton = document.getElementById('random-address');

randomAddressButton.onclick = function () {
    var address = StellarSdk.Keypair.random().publicKey();
    var image = document.getElementById('image');
    image.src = "https://id.lobstr.co/" + address + ".png";

    var icon = createStellarIdenticon(address);
    document.getElementById('generated-canvas').innerHTML = "";
    document.getElementsByClassName('stellar-identicon')[0].append(icon);

    drawIdenticon(document.getElementById('existed-canvas'), address);
};
randomAddressButton.onclick();
