## Stellar Identicon Generator (Javascript)

Tool to generate identicons for Stellar wallets - unique icons, generated based on the wallet public key.

Here's a set of identicons generated for random Stellar accounts:

![image](https://user-images.githubusercontent.com/984711/62962449-9e378d00-be07-11e9-93e3-9a9e79f1f078.png)


See also the Python version of the same generator here: https://github.com/Lobstrco/stellar-identicon-py

With the default settings, both will produce the same identicon image for any Stellar account address.

## Usage

```
import createStellarIdenticon from 'stellar-identicon-js';

const canvas = createStellarIdenticon('GBIDGDSVQXAHGZNOETS7ADUMWCDSQJU4R53EZRK6ONP3BA42UJL5PAHR');
const renderedIcon = canvas.toDataURL() // create  data URI containing a generated icon in PNG format

```

## Demo

- Install npm dependecies
```
npm install
```
- Build library
```
npm run build
```

And open the `demo/index.html` in the browser to see the usage example.

The demo shows how to use the library to generate identicon and confirms that it's compatible with the Python implementation of the generator:

![image](https://user-images.githubusercontent.com/984711/63211745-236eba80-c104-11e9-8eb5-fd7d363ac37b.png)


 ## Web API

You can also use a web service provided by LOBSTR to integrate identicons inside your app: https://id.lobstr.co

Let's say your Stellar address is: `GBIDGDSVQXAHGZNOETS7ADUMWCDSQJU4R53EZRK6ONP3BA42UJL5PAHR`

This is how you can get the identicon:
https://id.lobstr.co/GBIDGDSVQXAHGZNOETS7ADUMWCDSQJU4R53EZRK6ONP3BA42UJL5PAHR.png


This web service (id.lobstr.co) uses [stellar-identicon-py](https://github.com/Lobstrco/stellar-identicon-py) and saves the resulting identicons using Cloudfront.
So each identicon is generated only once, then saved and served fast through AWS Cloudfront CDN for fast delivery and high availability.

Identicons are served as 210x210 square images in PNG format, <1KB in size, which should work for most usecases.
