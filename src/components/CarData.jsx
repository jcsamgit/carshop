import image1 from "../multimedia/fiat-toro-plateado.jpeg"
import toroBordo from "../multimedia/fotoTarjetas/fiat-toro-Bordo.jpeg"
import toroAzul from "../multimedia/fotoTarjetas/fiat-toro-azul.jpeg"
import toroGris from "../multimedia/fotoTarjetas/fiat-toro-gris.jpeg"
import toroPlateado from "../multimedia/fotoTarjetas/fiat-toro-plateado.jpeg"
import cronosCrema from "../multimedia/fotoTarjetas/fiat-cronos-crema.jpeg"
import cronosGris from "../multimedia/fotoTarjetas/fiat-cronos-gris.jpeg"
import cronosMarron from "../multimedia/fotoTarjetas/fiat-cronos-marron.jpeg"
import cronosRojo from "../multimedia/fotoTarjetas/fiat-cronos-rojo.jpeg"
import stradaBlanco from "../multimedia/fotoTarjetas/fiat-strada-blanco.jpeg"
import stradaPlateado from "../multimedia/fotoTarjetas/fiat-strada-plateado.jpeg"
import stradaRojo from "../multimedia/fotoTarjetas/fiat-strada-rojo.jpeg"
import pulseAzulMarino from "../multimedia/fotoTarjetas/fiat-pulse-azulmarino.jpeg"
import pulseBlanco from "../multimedia/fotoTarjetas/fiat-pulse-blanco.jpeg"
import pulseGris from "../multimedia/fotoTarjetas/fiat-pulse-gris.jpeg"
import pulseRojo from "../multimedia/fotoTarjetas/fiat-pulse-rojo.jpeg"
import fiorinoCrema from "../multimedia/fotoTarjetas/fiat-fiorino-crema.jpeg"
// ficha tecnicas:
import toroFT1 from "../multimedia/ficha-tecnica/FT1toro.png"
import toroFT2 from "../multimedia/ficha-tecnica/FT2toro.png"
import cronosFT1 from "../multimedia/ficha-tecnica/FT1cronos.png"
import cronosFT2 from "../multimedia/ficha-tecnica/FT2cronos.png"
import stradaFT1 from "../multimedia/ficha-tecnica/FT1strada.png"
import stradaFT2 from "../multimedia/ficha-tecnica/FT2strada.png"
import pulseFT1 from "../multimedia/ficha-tecnica/FT1pulse.png"
import pulseFT2 from "../multimedia/ficha-tecnica/FT2pulse.png"
import fiorinoFT1 from "../multimedia/ficha-tecnica/FT1fiorino.png"
import fiorinoFT2 from "../multimedia/ficha-tecnica/FT2fiorino.png"
import fiorinoFT3 from "../multimedia/ficha-tecnica/FT3fiorino.png"




export const cardData=[

    {
        id:"1",
        marca: "FIAT",
        modelo: "TORO",
        precio: "$" + "8.688.100",
        cuota: "$"+ "137.848,33",
        image: toroPlateado,
        colors:[toroPlateado, toroAzul, toroBordo,toroGris],
        ficha:[toroFT1, toroFT2]
    },
    {
        id:"2",
        marca: "FIAT",
        modelo: "STRADA",
        precio: "$" + "6.397.500",
        cuota: "$"+ "101.504,90",
        image: stradaPlateado,
        colors:[stradaBlanco,stradaRojo,stradaPlateado],
        ficha:[stradaFT1, stradaFT2]
    },
    {
        id:"3",
        marca: "FIAT",
        modelo: "CRONOS",
        precio: "$" + "5.489.100",
        cuota: "$"+ "42.813,40",
        image: cronosCrema,
        colors:[cronosCrema,cronosGris,cronosMarron,cronosRojo],
        ficha:[cronosFT1, cronosFT2]
    },
    {
        id:"4",
        marca: "FIAT",
        modelo: "PULSE",
        precio: "$" + "6.057.900",
        cuota: "$"+ "96.116,70",
        image: pulseGris,
        colors:[pulseAzulMarino,pulseBlanco,pulseGris,pulseRojo],
        ficha:[pulseFT1,pulseFT2]
    },
    {
        id:"5",
        marca: "FIAT",
        modelo: "FIORINO",
        precio: "$" + "5.640.200",
        cuota: "$"+ "74.435,05",
        image: fiorinoCrema,
        colors:[fiorinoCrema],
        ficha:[fiorinoFT1, fiorinoFT2,fiorinoFT3]
    }
    // ,
    // {
    //     id:"6",
    //     marca: "FIAT",
    //     modelo: "TORO",
    //     precio: "$" + 1111111,
    //     image: image1,
    //     colors:[],
    //     ficha:[]
    // },
    // {
    //     id:"7",
    //     marca: "FIAT",
    //     modelo: "TORO",
    //     precio: "$" + 1111111,
    //     image: image1,
    //     colors:[],
    //     ficha:[]
    // }
]