import React, { useEffect } from "react";
import MoviesList from "../MoviesList/MoviesList";
import countryCodes from "../../data/Countries.json";

const movies = {
  result: [
    {
      type: "series",
      title: "Star",
      streamingInfo: {
        ar: [
          {
            service: "apple",
            streamingType: "addon",
            addon: "tvs.sbd.10000",
            link: "https://tv.apple.com/ar/show/star/umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
            audios: [],
            subtitles: [],
            availableSince: 1696209057,
          },
          {
            service: "apple",
            streamingType: "addon",
            quality: "hd",
            addon: "tvs.sbd.11120",
            link: "https://tv.apple.com/ar/show/star/umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
            audios: [],
            subtitles: [],
            availableSince: 1696209057,
          },
        ],
      },
      firstAirYear: 2016,
      lastAirYear: 2019,
      imdbId: "tt4941240",
      tmdbId: 68780,
      originalTitle: "Star",
      genres: [
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 10402,
          name: "Music",
        },
      ],
      creators: ["Lee Daniels", "Tom Donaghy"],
      status: {
        statusCode: 5,
        statusText: "Cancelled",
      },
      seasonCount: 3,
      episodeCount: 48,
      seasons: [
        {
          type: "season",
          title: "Season 1",
          streamingInfo: {
            ar: [
              {
                service: "apple",
                streamingType: "addon",
                addon: "tvs.sbd.10000",
                link: "https://tv.apple.com/us/episode/pilot/umc.cmc.6mq3lakxzxoi9ck8vbhk0xtu2?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                audios: [],
                subtitles: [],
                availableSince: 1696209057,
              },
              {
                service: "apple",
                streamingType: "addon",
                quality: "hd",
                addon: "tvs.sbd.11120",
                link: "https://tv.apple.com/us/episode/pilot/umc.cmc.6mq3lakxzxoi9ck8vbhk0xtu2?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                audios: [],
                subtitles: [],
                availableSince: 1696209057,
              },
            ],
          },
          firstAirYear: 2016,
          lastAirYear: 2017,
          episodes: [
            {
              type: "episode",
              title: "Pilot",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/pilot/umc.cmc.6mq3lakxzxoi9ck8vbhk0xtu2?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/pilot/umc.cmc.6mq3lakxzxoi9ck8vbhk0xtu2?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/pilot/umc.cmc.6mq3lakxzxoi9ck8vbhk0xtu2?playableId=tvs.sbd.9001%3A1180770717&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/pilot/umc.cmc.6mq3lakxzxoi9ck8vbhk0xtu2?playableId=tvs.sbd.9001%3A1180770717&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2016,
            },
            {
              type: "episode",
              title: "The Devil You Know",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/the-devil-you-know/umc.cmc.7bm08lw4me1xe9i0n8drgnoxl?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/the-devil-you-know/umc.cmc.7bm08lw4me1xe9i0n8drgnoxl?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/the-devil-you-know/umc.cmc.7bm08lw4me1xe9i0n8drgnoxl?playableId=tvs.sbd.9001%3A1189304381&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/the-devil-you-know/umc.cmc.7bm08lw4me1xe9i0n8drgnoxl?playableId=tvs.sbd.9001%3A1189304381&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Next of Kin",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/next-of-kin/umc.cmc.1h7gakgqs4d6f3fzhmm5zpyhi?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/next-of-kin/umc.cmc.1h7gakgqs4d6f3fzhmm5zpyhi?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/next-of-kin/umc.cmc.1h7gakgqs4d6f3fzhmm5zpyhi?playableId=tvs.sbd.9001%3A1193094218&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/next-of-kin/umc.cmc.1h7gakgqs4d6f3fzhmm5zpyhi?playableId=tvs.sbd.9001%3A1193094218&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Code of Silence",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/code-of-silence/umc.cmc.7ik0sa3ylwjgeqam7ms88vsm7?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/code-of-silence/umc.cmc.7ik0sa3ylwjgeqam7ms88vsm7?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/code-of-silence/umc.cmc.7ik0sa3ylwjgeqam7ms88vsm7?playableId=tvs.sbd.9001%3A1196200902&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/code-of-silence/umc.cmc.7ik0sa3ylwjgeqam7ms88vsm7?playableId=tvs.sbd.9001%3A1196200902&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "New Voices",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/new-voices/umc.cmc.4xe6gnwok3chlmyr1flfbrltu?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/new-voices/umc.cmc.4xe6gnwok3chlmyr1flfbrltu?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/new-voices/umc.cmc.4xe6gnwok3chlmyr1flfbrltu?playableId=tvs.sbd.9001%3A1197567744&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/new-voices/umc.cmc.4xe6gnwok3chlmyr1flfbrltu?playableId=tvs.sbd.9001%3A1197567744&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Infamous",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/infamous/umc.cmc.25dyxa8lvgo74cd1ywjb690vm?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/infamous/umc.cmc.25dyxa8lvgo74cd1ywjb690vm?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/infamous/umc.cmc.25dyxa8lvgo74cd1ywjb690vm?playableId=tvs.sbd.9001%3A1200925948&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/infamous/umc.cmc.25dyxa8lvgo74cd1ywjb690vm?playableId=tvs.sbd.9001%3A1200925948&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Black Wherever I Go",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/black-wherever-i-go/umc.cmc.wirroh3dp7llheiq68mdq29x?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/black-wherever-i-go/umc.cmc.wirroh3dp7llheiq68mdq29x?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/black-wherever-i-go/umc.cmc.wirroh3dp7llheiq68mdq29x?playableId=tvs.sbd.9001%3A1202587525&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/black-wherever-i-go/umc.cmc.wirroh3dp7llheiq68mdq29x?playableId=tvs.sbd.9001%3A1202587525&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Mama's Boy",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/mamas-boy/umc.cmc.163b4d0ztrfh3o99lkx6zsoxa?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/mamas-boy/umc.cmc.163b4d0ztrfh3o99lkx6zsoxa?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/mamas-boy/umc.cmc.163b4d0ztrfh3o99lkx6zsoxa?playableId=tvs.sbd.9001%3A1205242024&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/mamas-boy/umc.cmc.163b4d0ztrfh3o99lkx6zsoxa?playableId=tvs.sbd.9001%3A1205242024&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Alibi",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/alibi/umc.cmc.kbfb330b2t6gmh2ybe49iw1v?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/alibi/umc.cmc.kbfb330b2t6gmh2ybe49iw1v?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/alibi/umc.cmc.kbfb330b2t6gmh2ybe49iw1v?playableId=tvs.sbd.9001%3A1207612917&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/alibi/umc.cmc.kbfb330b2t6gmh2ybe49iw1v?playableId=tvs.sbd.9001%3A1207612917&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Boy Trouble",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/boy-trouble/umc.cmc.1mftecgc0sy5oufpdir5opp4b?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/boy-trouble/umc.cmc.1mftecgc0sy5oufpdir5opp4b?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/boy-trouble/umc.cmc.1mftecgc0sy5oufpdir5opp4b?playableId=tvs.sbd.9001%3A1209818294&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/boy-trouble/umc.cmc.1mftecgc0sy5oufpdir5opp4b?playableId=tvs.sbd.9001%3A1209818294&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Saving Face",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/saving-face/umc.cmc.5ufnxjpstoljagxxjl9za4wi5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/saving-face/umc.cmc.5ufnxjpstoljagxxjl9za4wi5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/saving-face/umc.cmc.5ufnxjpstoljagxxjl9za4wi5?playableId=tvs.sbd.9001%3A1213114420&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/saving-face/umc.cmc.5ufnxjpstoljagxxjl9za4wi5?playableId=tvs.sbd.9001%3A1213114420&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Showtime",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/showtime/umc.cmc.6gcyc5eat710lg3fm9hjbhtq5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/showtime/umc.cmc.6gcyc5eat710lg3fm9hjbhtq5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/showtime/umc.cmc.6gcyc5eat710lg3fm9hjbhtq5?playableId=tvs.sbd.9001%3A1214748617&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/showtime/umc.cmc.6gcyc5eat710lg3fm9hjbhtq5?playableId=tvs.sbd.9001%3A1214748617&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
          ],
        },
        {
          type: "season",
          title: "Season 2",
          streamingInfo: {
            ar: [
              {
                service: "apple",
                streamingType: "addon",
                addon: "tvs.sbd.10000",
                link: "https://tv.apple.com/us/episode/the-winner-takes-it-all/umc.cmc.5w9d95xf5wskcgah17c6c16cg?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                audios: [],
                subtitles: [],
                availableSince: 1696209057,
              },
              {
                service: "apple",
                streamingType: "addon",
                quality: "hd",
                addon: "tvs.sbd.11120",
                link: "https://tv.apple.com/us/episode/the-winner-takes-it-all/umc.cmc.5w9d95xf5wskcgah17c6c16cg?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                audios: [],
                subtitles: [],
                availableSince: 1696209057,
              },
            ],
          },
          firstAirYear: 2017,
          lastAirYear: 2018,
          episodes: [
            {
              type: "episode",
              title: "The Winner Takes It All",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/the-winner-takes-it-all/umc.cmc.5w9d95xf5wskcgah17c6c16cg?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/the-winner-takes-it-all/umc.cmc.5w9d95xf5wskcgah17c6c16cg?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/the-winner-takes-it-all/umc.cmc.5w9d95xf5wskcgah17c6c16cg?playableId=tvs.sbd.9001%3A1282223274&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/the-winner-takes-it-all/umc.cmc.5w9d95xf5wskcgah17c6c16cg?playableId=tvs.sbd.9001%3A1282223274&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Insecure",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/insecure/umc.cmc.1a076t9mhpfji2i3ykgmg0g5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/insecure/umc.cmc.1a076t9mhpfji2i3ykgmg0g5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/insecure/umc.cmc.1a076t9mhpfji2i3ykgmg0g5?playableId=tvs.sbd.9001%3A1292492976&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/insecure/umc.cmc.1a076t9mhpfji2i3ykgmg0g5?playableId=tvs.sbd.9001%3A1292492976&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "FUA...Good Night",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/fuagood-night/umc.cmc.4a52f9mrzqqd6ayj1kuy331fk?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/fuagood-night/umc.cmc.4a52f9mrzqqd6ayj1kuy331fk?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/fuagood-night/umc.cmc.4a52f9mrzqqd6ayj1kuy331fk?playableId=tvs.sbd.9001%3A1294986157&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/fuagood-night/umc.cmc.4a52f9mrzqqd6ayj1kuy331fk?playableId=tvs.sbd.9001%3A1294986157&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "It Ain't Over",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/it-aint-over/umc.cmc.5jsmgyk2apqbvvbd5et57y6vo?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/it-aint-over/umc.cmc.5jsmgyk2apqbvvbd5et57y6vo?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/it-aint-over/umc.cmc.5jsmgyk2apqbvvbd5et57y6vo?playableId=tvs.sbd.9001%3A1296640665&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/it-aint-over/umc.cmc.5jsmgyk2apqbvvbd5et57y6vo?playableId=tvs.sbd.9001%3A1296640665&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "May the Best Manager Win",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/may-the-best-manager-win/umc.cmc.36f0d4y2amejyimjb89e3kyp5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/may-the-best-manager-win/umc.cmc.36f0d4y2amejyimjb89e3kyp5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/may-the-best-manager-win/umc.cmc.36f0d4y2amejyimjb89e3kyp5?playableId=tvs.sbd.9001%3A1304855178&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/may-the-best-manager-win/umc.cmc.36f0d4y2amejyimjb89e3kyp5?playableId=tvs.sbd.9001%3A1304855178&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Faking It",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/faking-it/umc.cmc.4g0xwjn1hwk1549i6t8mcjfww?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/faking-it/umc.cmc.4g0xwjn1hwk1549i6t8mcjfww?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/faking-it/umc.cmc.4g0xwjn1hwk1549i6t8mcjfww?playableId=tvs.sbd.9001%3A1313690563&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/faking-it/umc.cmc.4g0xwjn1hwk1549i6t8mcjfww?playableId=tvs.sbd.9001%3A1313690563&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Ghetto Symphony",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/ghetto-symphony/umc.cmc.2cuopxvl7cm6s7fleqmuzb8co?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/ghetto-symphony/umc.cmc.2cuopxvl7cm6s7fleqmuzb8co?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/ghetto-symphony/umc.cmc.2cuopxvl7cm6s7fleqmuzb8co?playableId=tvs.sbd.9001%3A1318599421&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/ghetto-symphony/umc.cmc.2cuopxvl7cm6s7fleqmuzb8co?playableId=tvs.sbd.9001%3A1318599421&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "A House Divided",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/a-house-divided/umc.cmc.6lr9be38tzfdf0r3zubync0qn?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/a-house-divided/umc.cmc.6lr9be38tzfdf0r3zubync0qn?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/a-house-divided/umc.cmc.6lr9be38tzfdf0r3zubync0qn?playableId=tvs.sbd.9001%3A1321817895&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/a-house-divided/umc.cmc.6lr9be38tzfdf0r3zubync0qn?playableId=tvs.sbd.9001%3A1321817895&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Climax",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/climax/umc.cmc.2fyk23bdo90jdzgdzhjs39afi?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/climax/umc.cmc.2fyk23bdo90jdzgdzhjs39afi?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/climax/umc.cmc.2fyk23bdo90jdzgdzhjs39afi?playableId=tvs.sbd.9001%3A1324928471&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/climax/umc.cmc.2fyk23bdo90jdzgdzhjs39afi?playableId=tvs.sbd.9001%3A1324928471&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2017,
            },
            {
              type: "episode",
              title: "Rise From the Ashes",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/rise-from-the-ashes/umc.cmc.4747dv7imz4wdxum0mptc5i1d?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/rise-from-the-ashes/umc.cmc.4747dv7imz4wdxum0mptc5i1d?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/rise-from-the-ashes/umc.cmc.4747dv7imz4wdxum0mptc5i1d?playableId=tvs.sbd.9001%3A1364823174&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/rise-from-the-ashes/umc.cmc.4747dv7imz4wdxum0mptc5i1d?playableId=tvs.sbd.9001%3A1364823174&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Take it to Church",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/take-it-to-church/umc.cmc.57tvhtkf520a8an6sl4mncdib?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/take-it-to-church/umc.cmc.57tvhtkf520a8an6sl4mncdib?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/take-it-to-church/umc.cmc.57tvhtkf520a8an6sl4mncdib?playableId=tvs.sbd.9001%3A1367342047&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/take-it-to-church/umc.cmc.57tvhtkf520a8an6sl4mncdib?playableId=tvs.sbd.9001%3A1367342047&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Dreamers",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/dreamers/umc.cmc.5lp0rnmtwjskshi89u2u1yxol?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/dreamers/umc.cmc.5lp0rnmtwjskshi89u2u1yxol?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/dreamers/umc.cmc.5lp0rnmtwjskshi89u2u1yxol?playableId=tvs.sbd.9001%3A1369019578&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/dreamers/umc.cmc.5lp0rnmtwjskshi89u2u1yxol?playableId=tvs.sbd.9001%3A1369019578&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Forward (E)Motion",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/forwardmotion/umc.cmc.5ylsupos3u48tphdpvsdgrjos?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/forwardmotion/umc.cmc.5ylsupos3u48tphdpvsdgrjos?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/forwardmotion/umc.cmc.5ylsupos3u48tphdpvsdgrjos?playableId=tvs.sbd.9001%3A1371938499&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/forwardmotion/umc.cmc.5ylsupos3u48tphdpvsdgrjos?playableId=tvs.sbd.9001%3A1371938499&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "After the Set, It's the Afterparty",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/after-the-set-its-the-afterparty/umc.cmc.6stm367mvvyq9vvyxv1h5znai?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/after-the-set-its-the-afterparty/umc.cmc.6stm367mvvyq9vvyxv1h5znai?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/after-the-set-its-the-afterparty/umc.cmc.6stm367mvvyq9vvyxv1h5znai?playableId=tvs.sbd.9001%3A1375240527&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/after-the-set-its-the-afterparty/umc.cmc.6stm367mvvyq9vvyxv1h5znai?playableId=tvs.sbd.9001%3A1375240527&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Let the Good Times Roll",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/let-the-good-times-roll/umc.cmc.1mq0wwphhazji4pfr2b3hym5a?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/let-the-good-times-roll/umc.cmc.1mq0wwphhazji4pfr2b3hym5a?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/let-the-good-times-roll/umc.cmc.1mq0wwphhazji4pfr2b3hym5a?playableId=tvs.sbd.9001%3A1377395480&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/let-the-good-times-roll/umc.cmc.1mq0wwphhazji4pfr2b3hym5a?playableId=tvs.sbd.9001%3A1377395480&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Take It or Leave It",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/take-it-or-leave-it/umc.cmc.50tr9jtg9b63kaf2k7j4c5fp5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/take-it-or-leave-it/umc.cmc.50tr9jtg9b63kaf2k7j4c5fp5?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/take-it-or-leave-it/umc.cmc.50tr9jtg9b63kaf2k7j4c5fp5?playableId=tvs.sbd.9001%3A1380591993&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/take-it-or-leave-it/umc.cmc.50tr9jtg9b63kaf2k7j4c5fp5?playableId=tvs.sbd.9001%3A1380591993&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Mrs. Rivera",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/mrs-rivera/umc.cmc.36n96g4z0ghxizxfwjsv2vkkw?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/mrs-rivera/umc.cmc.36n96g4z0ghxizxfwjsv2vkkw?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/mrs-rivera/umc.cmc.36n96g4z0ghxizxfwjsv2vkkw?playableId=tvs.sbd.9001%3A1383440963&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/mrs-rivera/umc.cmc.36n96g4z0ghxizxfwjsv2vkkw?playableId=tvs.sbd.9001%3A1383440963&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Thirty Days to Famous",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/thirty-days-to-famous/umc.cmc.1xi0jsovp3l65jhj7uehnp9tp?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/thirty-days-to-famous/umc.cmc.1xi0jsovp3l65jhj7uehnp9tp?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/thirty-days-to-famous/umc.cmc.1xi0jsovp3l65jhj7uehnp9tp?playableId=tvs.sbd.9001%3A1387074421&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/thirty-days-to-famous/umc.cmc.1xi0jsovp3l65jhj7uehnp9tp?playableId=tvs.sbd.9001%3A1387074421&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
          ],
        },
        {
          type: "season",
          title: "Season 3",
          streamingInfo: {
            ar: [
              {
                service: "apple",
                streamingType: "addon",
                addon: "tvs.sbd.10000",
                link: "https://tv.apple.com/us/episode/secrets--lies/umc.cmc.408p28bd1ruu681pzvcoc1dam?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                audios: [],
                subtitles: [],
                availableSince: 1696209057,
              },
              {
                service: "apple",
                streamingType: "addon",
                quality: "hd",
                addon: "tvs.sbd.11120",
                link: "https://tv.apple.com/us/episode/secrets--lies/umc.cmc.408p28bd1ruu681pzvcoc1dam?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                audios: [],
                subtitles: [],
                availableSince: 1696209057,
              },
            ],
          },
          firstAirYear: 2018,
          lastAirYear: 2019,
          episodes: [
            {
              type: "episode",
              title: "Secrets & Lies",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/secrets--lies/umc.cmc.408p28bd1ruu681pzvcoc1dam?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/secrets--lies/umc.cmc.408p28bd1ruu681pzvcoc1dam?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/secrets--lies/umc.cmc.408p28bd1ruu681pzvcoc1dam?playableId=tvs.sbd.9001%3A1422341454&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/secrets--lies/umc.cmc.408p28bd1ruu681pzvcoc1dam?playableId=tvs.sbd.9001%3A1422341454&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Who's the Daddy",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/whos-the-daddy/umc.cmc.4qt2flz2gtnd636sy6whl0jfi?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/whos-the-daddy/umc.cmc.4qt2flz2gtnd636sy6whl0jfi?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/whos-the-daddy/umc.cmc.4qt2flz2gtnd636sy6whl0jfi?playableId=tvs.sbd.9001%3A1437734012&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/whos-the-daddy/umc.cmc.4qt2flz2gtnd636sy6whl0jfi?playableId=tvs.sbd.9001%3A1437734012&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "A Family Affair",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/a-family-affair/umc.cmc.2vwsxksykhpii642nyliy0ky0?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/a-family-affair/umc.cmc.2vwsxksykhpii642nyliy0ky0?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/a-family-affair/umc.cmc.2vwsxksykhpii642nyliy0ky0?playableId=tvs.sbd.9001%3A1438606212&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/a-family-affair/umc.cmc.2vwsxksykhpii642nyliy0ky0?playableId=tvs.sbd.9001%3A1438606212&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "All Falls Down",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/all-falls-down/umc.cmc.z5r39acbbutk397ee7becxdi?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/all-falls-down/umc.cmc.z5r39acbbutk397ee7becxdi?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/all-falls-down/umc.cmc.z5r39acbbutk397ee7becxdi?playableId=tvs.sbd.9001%3A1439281318&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/all-falls-down/umc.cmc.z5r39acbbutk397ee7becxdi?playableId=tvs.sbd.9001%3A1439281318&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Someday We'll All Be Free",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/someday-well-all-be-free/umc.cmc.7f15rdxdtjvh2wn3z9qbu3iq9?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/someday-well-all-be-free/umc.cmc.7f15rdxdtjvh2wn3z9qbu3iq9?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/someday-well-all-be-free/umc.cmc.7f15rdxdtjvh2wn3z9qbu3iq9?playableId=tvs.sbd.9001%3A1440702632&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/someday-well-all-be-free/umc.cmc.7f15rdxdtjvh2wn3z9qbu3iq9?playableId=tvs.sbd.9001%3A1440702632&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Ante Up",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/ante-up/umc.cmc.49dmuufyup1sjnqmjdijjlms8?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/ante-up/umc.cmc.49dmuufyup1sjnqmjdijjlms8?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/ante-up/umc.cmc.49dmuufyup1sjnqmjdijjlms8?playableId=tvs.sbd.9001%3A1441511283&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/ante-up/umc.cmc.49dmuufyup1sjnqmjdijjlms8?playableId=tvs.sbd.9001%3A1441511283&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Karma",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/karma/umc.cmc.5i9erf0b585dtmabm51y9tb87?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/karma/umc.cmc.5i9erf0b585dtmabm51y9tb87?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/karma/umc.cmc.5i9erf0b585dtmabm51y9tb87?playableId=tvs.sbd.9001%3A1442190087&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/karma/umc.cmc.5i9erf0b585dtmabm51y9tb87?playableId=tvs.sbd.9001%3A1442190087&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Roots and Wings",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/roots-and-wings/umc.cmc.6z1urec7jcqfnhoszmoxn5tv?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/roots-and-wings/umc.cmc.6z1urec7jcqfnhoszmoxn5tv?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/roots-and-wings/umc.cmc.6z1urec7jcqfnhoszmoxn5tv?playableId=tvs.sbd.9001%3A1444827597&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/roots-and-wings/umc.cmc.6z1urec7jcqfnhoszmoxn5tv?playableId=tvs.sbd.9001%3A1444827597&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "Zion",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/zion/umc.cmc.3cffojimwa32ah4kyk3jyr661?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/zion/umc.cmc.3cffojimwa32ah4kyk3jyr661?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/zion/umc.cmc.3cffojimwa32ah4kyk3jyr661?playableId=tvs.sbd.9001%3A1445650669&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/zion/umc.cmc.3cffojimwa32ah4kyk3jyr661?playableId=tvs.sbd.9001%3A1445650669&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2018,
            },
            {
              type: "episode",
              title: "When Stars Fall",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/when-stars-fall/umc.cmc.7h3o9akueg5fwob30jhykm3me?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/when-stars-fall/umc.cmc.7h3o9akueg5fwob30jhykm3me?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/when-stars-fall/umc.cmc.7h3o9akueg5fwob30jhykm3me?playableId=tvs.sbd.9001%3A1455705340&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/when-stars-fall/umc.cmc.7h3o9akueg5fwob30jhykm3me?playableId=tvs.sbd.9001%3A1455705340&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2019,
            },
            {
              type: "episode",
              title: "Watch the Throne",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/watch-the-throne/umc.cmc.55az66bs3q79de58vap9guwpv?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/watch-the-throne/umc.cmc.55az66bs3q79de58vap9guwpv?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/watch-the-throne/umc.cmc.55az66bs3q79de58vap9guwpv?playableId=tvs.sbd.9001%3A1456488845&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/watch-the-throne/umc.cmc.55az66bs3q79de58vap9guwpv?playableId=tvs.sbd.9001%3A1456488845&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2019,
            },
            {
              type: "episode",
              title: "Toxic",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/toxic/umc.cmc.51tic66x2aea8tclb8t6zzexu?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/toxic/umc.cmc.51tic66x2aea8tclb8t6zzexu?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/toxic/umc.cmc.51tic66x2aea8tclb8t6zzexu?playableId=tvs.sbd.9001%3A1457477147&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/toxic/umc.cmc.51tic66x2aea8tclb8t6zzexu?playableId=tvs.sbd.9001%3A1457477147&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2019,
            },
            {
              type: "episode",
              title: "The Reckoning",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/the-reckoning/umc.cmc.77tkqeppljfebpxneejxqbndb?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/the-reckoning/umc.cmc.77tkqeppljfebpxneejxqbndb?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/the-reckoning/umc.cmc.77tkqeppljfebpxneejxqbndb?playableId=tvs.sbd.9001%3A1458185307&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/the-reckoning/umc.cmc.77tkqeppljfebpxneejxqbndb?playableId=tvs.sbd.9001%3A1458185307&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2019,
            },
            {
              type: "episode",
              title: "Amazing Grace",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/amazing-grace/umc.cmc.5b66cgwngtnirsefie0vvrj40?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/amazing-grace/umc.cmc.5b66cgwngtnirsefie0vvrj40?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/amazing-grace/umc.cmc.5b66cgwngtnirsefie0vvrj40?playableId=tvs.sbd.9001%3A1458842201&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/amazing-grace/umc.cmc.5b66cgwngtnirsefie0vvrj40?playableId=tvs.sbd.9001%3A1458842201&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2019,
            },
            {
              type: "episode",
              title: "Lean On Me",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/lean-on-me/umc.cmc.brq5b31qdyf4isd7duhp2uwh?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/lean-on-me/umc.cmc.brq5b31qdyf4isd7duhp2uwh?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/lean-on-me/umc.cmc.brq5b31qdyf4isd7duhp2uwh?playableId=tvs.sbd.9001%3A1459720673&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/lean-on-me/umc.cmc.brq5b31qdyf4isd7duhp2uwh?playableId=tvs.sbd.9001%3A1459720673&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2019,
            },
            {
              type: "episode",
              title: "Square One",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/square-one/umc.cmc.3l7swsx142qyd3fpssmwor8m1?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/square-one/umc.cmc.3l7swsx142qyd3fpssmwor8m1?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/square-one/umc.cmc.3l7swsx142qyd3fpssmwor8m1?playableId=tvs.sbd.9001%3A1460316888&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/square-one/umc.cmc.3l7swsx142qyd3fpssmwor8m1?playableId=tvs.sbd.9001%3A1460316888&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2019,
            },
            {
              type: "episode",
              title: "Proud Mary Keep On",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/proud-mary-keep-on/umc.cmc.4pbnexm0zem8rv5cer7gkkaat?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/proud-mary-keep-on/umc.cmc.4pbnexm0zem8rv5cer7gkkaat?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/proud-mary-keep-on/umc.cmc.4pbnexm0zem8rv5cer7gkkaat?playableId=tvs.sbd.9001%3A1461356294&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/proud-mary-keep-on/umc.cmc.4pbnexm0zem8rv5cer7gkkaat?playableId=tvs.sbd.9001%3A1461356294&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2019,
            },
            {
              type: "episode",
              title: "When the Levee Breaks",
              streamingInfo: {
                ar: [
                  {
                    service: "apple",
                    streamingType: "addon",
                    addon: "tvs.sbd.10000",
                    link: "https://tv.apple.com/us/episode/when-the-levee-breaks/umc.cmc.2gkqt3fz4y2rwscd8s023asg?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "addon",
                    quality: "hd",
                    addon: "tvs.sbd.11120",
                    link: "https://tv.apple.com/us/episode/when-the-levee-breaks/umc.cmc.2gkqt3fz4y2rwscd8s023asg?showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "sd",
                    link: "https://tv.apple.com/us/episode/when-the-levee-breaks/umc.cmc.2gkqt3fz4y2rwscd8s023asg?playableId=tvs.sbd.9001%3A1462260912&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "1.99",
                      currency: "ARS",
                      formatted: "1.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                  {
                    service: "apple",
                    streamingType: "buy",
                    quality: "hd",
                    link: "https://tv.apple.com/us/episode/when-the-levee-breaks/umc.cmc.2gkqt3fz4y2rwscd8s023asg?playableId=tvs.sbd.9001%3A1462260912&showId=umc.cmc.5p9fypr7lwf86zf2vmyl9ub0m",
                    audios: [],
                    subtitles: [],
                    price: {
                      amount: "2.99",
                      currency: "ARS",
                      formatted: "2.99 ARS",
                    },
                    availableSince: 1696209057,
                  },
                ],
              },
              year: 2019,
            },
          ],
        },
      ],
    },
    {
      type: "movie",
      title: "Star",
      streamingInfo: {},
      year: 2001,
      imdbId: "tt0286151",
      tmdbId: 22599,
      originalTitle: "Star",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 35,
          name: "Comedy",
        },
      ],
      directors: ["Guy Ritchie"],
    },
    {
      type: "movie",
      title: "Bombay Talkies",
      streamingInfo: {
        ar: [
          {
            service: "netflix",
            streamingType: "subscription",
            link: "https://www.netflix.com/title/70275753/",
            audios: [],
            subtitles: [],
            availableSince: 1648580301,
          },
        ],
      },
      year: 2013,
      imdbId: "tt2797242",
      tmdbId: 190940,
      originalTitle: "Bombay Talkies",
      genres: [
        {
          id: 18,
          name: "Drama",
        },
      ],
      directors: [
        "Karan Johar",
        "Zoya Akhtar",
        "Anurag Kashyap",
        "Dibakar Banerjee",
      ],
    },
    {
      type: "movie",
      title: "Star",
      streamingInfo: {
        ar: [
          {
            service: "prime",
            streamingType: "subscription",
            quality: "sd",
            link: "https://www.primevideo.com/detail/0SYR06R5AKKYD2Q9EVWOCOP1A5/ref=atv_dp",
            audios: [
              {
                language: "mal",
                region: "",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "eng",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fra",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tam",
                  region: "",
                },
                closedCaptions: false,
              },
            ],
            availableSince: 1700980972,
          },
        ],
      },
      year: 2021,
      imdbId: "tt13758250",
      tmdbId: 814030,
      originalTitle: "സ്റ്റാർ",
      genres: [
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 53,
          name: "Thriller",
        },
      ],
      directors: ["Domin D'Silva"],
    },
    {
      type: "movie",
      title: "Star",
      streamingInfo: {},
      year: 2014,
      imdbId: "tt3924450",
      tmdbId: 278718,
      originalTitle: "Звезда",
      genres: [
        {
          id: 35,
          name: "Comedy",
        },
        {
          id: 18,
          name: "Drama",
        },
      ],
      directors: ["Anna Melikyan"],
    },
    {
      type: "movie",
      title: "Star",
      streamingInfo: {},
      year: 1993,
      imdbId: "tt0108213",
      tmdbId: 136244,
      originalTitle: "Star",
      genres: [
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 10749,
          name: "Romance",
        },
      ],
      directors: ["Michael Miller"],
    },
    {
      type: "movie",
      title: "Etoile",
      streamingInfo: {},
      year: 1989,
      imdbId: "tt0096522",
      tmdbId: 28892,
      originalTitle: "Étoile",
      genres: [
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 10749,
          name: "Romance",
        },
        {
          id: 53,
          name: "Thriller",
        },
      ],
      directors: ["Peter Del Monte"],
    },
    {
      type: "movie",
      title: "Star",
      streamingInfo: {},
      year: 1982,
      imdbId: "tt0249986",
      tmdbId: 125225,
      originalTitle: "Star",
      genres: [
        {
          id: 18,
          name: "Drama",
        },
      ],
      directors: ["Vinod Pande"],
    },
    {
      type: "movie",
      title: "Star",
      streamingInfo: {},
      year: 2021,
      imdbId: "tt15310880",
      tmdbId: 874418,
      originalTitle: "Stjer",
      genres: [
        {
          id: 35,
          name: "Comedy",
        },
      ],
      directors: ["Janko Krist"],
    },
    {
      type: "movie",
      title: "Oh! You Beautiful 'Doll'",
      streamingInfo: {},
      year: 1973,
      imdbId: "tt0126560",
      tmdbId: 321829,
      originalTitle: "Oh! You Beautiful 'Doll'",
      genres: [
        {
          id: 35,
          name: "Comedy",
        },
      ],
      directors: ["Walt Davis"],
    },
    {
      type: "movie",
      title: "Star",
      streamingInfo: {},
      year: 2015,
      imdbId: "tt4696722",
      tmdbId: 611791,
      originalTitle: "Star",
      genres: [],
      directors: ["Emilie Mannering"],
    },
    {
      type: "movie",
      title: "Star",
      streamingInfo: {},
      year: 2014,
      imdbId: "tt4186230",
      tmdbId: 310980,
      originalTitle: "Xing",
      genres: [
        {
          id: 18,
          name: "Drama",
        },
      ],
      directors: ["Bradley Liew"],
    },
    {
      type: "series",
      title: "Bituin",
      streamingInfo: {},
      firstAirYear: 2002,
      lastAirYear: 2003,
      imdbId: "tt0344626",
      tmdbId: 4048,
      originalTitle: "Bituin",
      genres: [
        {
          id: 18,
          name: "Drama",
        },
      ],
      creators: [],
      status: {
        statusCode: 4,
        statusText: "Ended",
      },
      seasonCount: 1,
      episodeCount: 173,
      seasons: [
        {
          type: "season",
          title: "Season 1",
          streamingInfo: {},
          firstAirYear: 2002,
          lastAirYear: 2003,
          episodes: [
            {
              type: "episode",
              title: "Episode 1",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 2",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 3",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 4",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 5",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 6",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 7",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 8",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 9",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 10",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 11",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 12",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 13",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 14",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 15",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 16",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 17",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 18",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 19",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 20",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 21",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 22",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 23",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 24",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 25",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 26",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 27",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 28",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 29",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 30",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 31",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 32",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 33",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 34",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 35",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 36",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 37",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 38",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 39",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 40",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 41",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 42",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 43",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 44",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 45",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 46",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 47",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 48",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 49",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 50",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 51",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 52",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 53",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 54",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 55",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 56",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 57",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 58",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 59",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 60",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 61",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 62",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 63",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 64",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 65",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 66",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 67",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 68",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 69",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 70",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 71",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 72",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Episode 73",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 74",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 75",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 76",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 77",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 78",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 79",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 80",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 81",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 82",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 83",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 84",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 85",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 86",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 87",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 88",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 89",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 90",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 91",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 92",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 93",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 94",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 95",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 96",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 97",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 98",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 99",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 100",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 101",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 102",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 103",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 104",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 105",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 106",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 107",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 108",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 109",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 110",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 111",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 112",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 113",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 114",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 115",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 116",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 117",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 118",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 119",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 120",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 121",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 122",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 123",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 124",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 125",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 126",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 127",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 128",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 129",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 130",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 131",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 132",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 133",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 134",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 135",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 136",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 137",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 138",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 139",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 140",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 141",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 142",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 143",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 144",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 145",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 146",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 147",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 148",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 149",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 150",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 151",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 152",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 153",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 154",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 155",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 156",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 157",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 158",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 159",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 160",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 161",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 162",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 163",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 164",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 165",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 166",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 167",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 168",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 169",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 170",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 171",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 172",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Episode 173",
              streamingInfo: {},
              year: 2003,
            },
          ],
        },
      ],
    },
    {
      type: "movie",
      title: "Oldboy",
      streamingInfo: {},
      year: 2003,
      imdbId: "tt0364569",
      tmdbId: 670,
      originalTitle: "올드보이",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 9648,
          name: "Mystery",
        },
      ],
      directors: ["Park Chan-wook"],
    },
    {
      type: "movie",
      title: "Grown Ups",
      streamingInfo: {
        ar: [
          {
            service: "hbo",
            streamingType: "subscription",
            quality: "hd",
            link: "https://play.hbomax.com/page/urn:hbo:page:GYmvW9Qekaye8wwEAAAAC:type:feature",
            videoLink:
              "https://play.hbomax.com/feature/urn:hbo:feature:GYmvW9Qekaye8wwEAAAAC",
            audios: [
              {
                language: "eng",
                region: "USA",
              },
              {
                language: "por",
                region: "BRA",
              },
              {
                language: "spa",
                region: "419",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "por",
                  region: "BRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
            ],
            leaving: 17092619400,
            availableSince: 1677714092,
          },
          {
            service: "netflix",
            streamingType: "subscription",
            link: "https://www.netflix.com/title/70125231/",
            audios: [],
            subtitles: [],
            availableSince: 1648623219,
          },
          {
            service: "prime",
            streamingType: "subscription",
            quality: "sd",
            link: "https://www.primevideo.com/detail/0K1TIFJZQCE706887FU5FUQ314/ref=atv_dp",
            audios: [
              {
                language: "deu",
                region: "",
              },
              {
                language: "eng",
                region: "",
              },
              {
                language: "fra",
                region: "",
              },
              {
                language: "ita",
                region: "",
              },
              {
                language: "jpn",
                region: "",
              },
              {
                language: "por",
                region: "",
              },
              {
                language: "spa",
                region: "",
              },
              {
                language: "tha",
                region: "",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "dan",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "deu",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ell",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "eng",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fra",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "heb",
                  region: "",
                },
                closedCaptions: true,
              },
              {
                locale: {
                  language: "hin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ita",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "jpn",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "kor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nld",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nob",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "rus",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "swe",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tha",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tur",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "vie",
                  region: "",
                },
                closedCaptions: false,
              },
            ],
            availableSince: 1703617108,
          },
        ],
      },
      year: 2010,
      imdbId: "tt1375670",
      tmdbId: 38365,
      originalTitle: "Grown Ups",
      genres: [
        {
          id: 35,
          name: "Comedy",
        },
      ],
      directors: ["Dennis Dugan"],
    },
    {
      type: "movie",
      title: "Star Wars",
      streamingInfo: {
        ar: [
          {
            service: "disney",
            streamingType: "subscription",
            quality: "uhd",
            link: "https://www.disneyplus.com/movies/star-wars-a-new-hope-episode-iv/12fVeZxD2fWJ",
            videoLink:
              "https://www.disneyplus.com/video/f4add311-5f2a-4d79-a6c3-588a1765b7d9",
            audios: [
              {
                language: "ces",
                region: "",
              },
              {
                language: "cmn",
                region: "",
              },
              {
                language: "deu",
                region: "",
              },
              {
                language: "eng",
                region: "",
              },
              {
                language: "fra",
                region: "FRA",
              },
              {
                language: "hun",
                region: "",
              },
              {
                language: "ita",
                region: "",
              },
              {
                language: "jpn",
                region: "",
              },
              {
                language: "kor",
                region: "",
              },
              {
                language: "pol",
                region: "",
              },
              {
                language: "por",
                region: "BRA",
              },
              {
                language: "slk",
                region: "",
              },
              {
                language: "spa",
                region: "419",
              },
              {
                language: "spa",
                region: "ESP",
              },
              {
                language: "tur",
                region: "",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "ces",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "cmn",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "dan",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "deu",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ell",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "eng",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fra",
                  region: "FRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "hun",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "isl",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ita",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "jpn",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "kor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nld",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "pol",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "BRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "PRT",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ron",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "slk",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "ESP",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "swe",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tur",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "zho",
                  region: "HKG",
                },
                closedCaptions: false,
              },
            ],
            availableSince: 1649695049,
          },
        ],
      },
      year: 1977,
      imdbId: "tt0076759",
      tmdbId: 11,
      originalTitle: "Star Wars",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 14,
          name: "Fantasy",
        },
      ],
      directors: ["George Lucas"],
    },
    {
      type: "movie",
      title: "Star!",
      streamingInfo: {},
      year: 1968,
      imdbId: "tt0063642",
      tmdbId: 52959,
      originalTitle: "Star!",
      genres: [
        {
          id: 18,
          name: "Drama",
        },
      ],
      directors: ["Robert Wise"],
    },
    {
      type: "series",
      title: "Stargate SG-1",
      streamingInfo: {},
      firstAirYear: 1997,
      lastAirYear: 2007,
      imdbId: "tt0118480",
      tmdbId: 4629,
      originalTitle: "Stargate SG-1",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
      ],
      creators: ["Brad Wright", "Jonathan Glassner"],
      status: {
        statusCode: 4,
        statusText: "Ended",
      },
      seasonCount: 10,
      episodeCount: 214,
      seasons: [
        {
          type: "season",
          title: "Season 1",
          streamingInfo: {},
          firstAirYear: 1997,
          lastAirYear: 1998,
          episodes: [
            {
              type: "episode",
              title: "Children of the Gods (1)",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Children of the Gods (2)",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "The Enemy Within",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Emancipation",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "The Broca Divide",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "The First Commandment",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Cold Lazarus",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "The Nox",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Brief Candle",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Thor's Hammer",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "The Torment of Tantalus",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Bloodlines",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Fire and Water",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Hathor",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Singularity",
              streamingInfo: {},
              year: 1997,
            },
            {
              type: "episode",
              title: "Cor-Ai",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Enigma",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Solitudes",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Tin Man",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "There But For the Grace of God",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Politics (1)",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Within the Serpent's Grasp (2)",
              streamingInfo: {},
              year: 1998,
            },
          ],
        },
        {
          type: "season",
          title: "Season 2",
          streamingInfo: {},
          firstAirYear: 1998,
          lastAirYear: 1999,
          episodes: [
            {
              type: "episode",
              title: "The Serpent's Lair (3)",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "In the Line of Duty",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Prisoners",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "The Gamekeeper",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Need",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Thor's Chariot",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Message in a Bottle",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Family",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Secrets",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Bane",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "The Tok'ra (1)",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "The Tok'ra (2)",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Spirits",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "Touchstone",
              streamingInfo: {},
              year: 1998,
            },
            {
              type: "episode",
              title: "The Fifth Race",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "A Matter of Time",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Holiday",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Serpent's Song",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "One False Step",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Show and Tell",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "1969",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Out of Mind (1)",
              streamingInfo: {},
              year: 1999,
            },
          ],
        },
        {
          type: "season",
          title: "Season 3",
          streamingInfo: {},
          firstAirYear: 1999,
          lastAirYear: 2000,
          episodes: [
            {
              type: "episode",
              title: "Into the Fire (2)",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Seth",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Fair Game",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Legacy",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Learning Curve",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Point of View",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Deadman Switch",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Demons",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Rules of Engagement",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Forever in a Day",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Past and Present",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Jolinar's Memories (1)",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "The Devil You Know (2)",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Foothold",
              streamingInfo: {},
              year: 1999,
            },
            {
              type: "episode",
              title: "Pretense",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Urgo",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "A Hundred Days",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Shades of Grey",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "New Ground",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Maternal Instinct",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Crystal Skull",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Nemesis (1)",
              streamingInfo: {},
              year: 2000,
            },
          ],
        },
        {
          type: "season",
          title: "Season 4",
          streamingInfo: {},
          firstAirYear: 2000,
          lastAirYear: 2001,
          episodes: [
            {
              type: "episode",
              title: "Small Victories (2)",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "The Other Side",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Upgrades",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Crossroads",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Divide and Conquer",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Window of Opportunity",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Watergate",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "The First Ones",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Scorched Earth",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Beneath the Surface",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Point of No Return",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Tangent",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "The Curse",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "The Serpent's Venom",
              streamingInfo: {},
              year: 2000,
            },
            {
              type: "episode",
              title: "Chain Reaction",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "2010",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Absolute Power",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "The Light",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Prodigy",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Entity",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Double Jeopardy",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Exodus (1)",
              streamingInfo: {},
              year: 2001,
            },
          ],
        },
        {
          type: "season",
          title: "Season 5",
          streamingInfo: {},
          firstAirYear: 2001,
          lastAirYear: 2002,
          episodes: [
            {
              type: "episode",
              title: "Enemies (2)",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Threshold (3)",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Ascension",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "The Fifth Man",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Red Sky",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Rite of Passage",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Beast of Burden",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "The Tomb",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Between Two Fires",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "2001",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Desperate Measures",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Wormhole X-Treme!",
              streamingInfo: {},
              year: 2001,
            },
            {
              type: "episode",
              title: "Proving Ground",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "48 Hours",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Summit (1)",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Last Stand (2)",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Fail Safe",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "The Warrior",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Menace",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "The Sentinel",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Meridian",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Revelations",
              streamingInfo: {},
              year: 2002,
            },
          ],
        },
        {
          type: "season",
          title: "Season 6",
          streamingInfo: {},
          firstAirYear: 2002,
          lastAirYear: 2003,
          episodes: [
            {
              type: "episode",
              title: "Redemption (1)",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Redemption (2)",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Descent",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Frozen",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Nightwalkers",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Abyss",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Shadow Play",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "The Other Guys",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Allegiance",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Cure",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Prometheus (1)",
              streamingInfo: {},
              year: 2002,
            },
            {
              type: "episode",
              title: "Unnatural Selection (2)",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Sight Unseen",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Smoke & Mirrors",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Paradise Lost",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Metamorphosis",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Disclosure",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Forsaken",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "The Changeling",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Memento",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Prophecy",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Full Circle",
              streamingInfo: {},
              year: 2003,
            },
          ],
        },
        {
          type: "season",
          title: "Season 7",
          streamingInfo: {},
          firstAirYear: 2003,
          lastAirYear: 2004,
          episodes: [
            {
              type: "episode",
              title: "Fallen (1)",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Homecoming (2)",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Fragile Balance",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Orpheus",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Revisions",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Lifeboat",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Enemy Mine",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Space Race",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Avenger 2.0",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Birthright",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Evolution (1)",
              streamingInfo: {},
              year: 2003,
            },
            {
              type: "episode",
              title: "Evolution (2)",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Grace",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Fallout",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Chimera",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Death Knell",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Heroes (1)",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Heroes (2)",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Resurrection",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Inauguration",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Lost City (1)",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Lost City (2)",
              streamingInfo: {},
              year: 2004,
            },
          ],
        },
        {
          type: "season",
          title: "Season 8",
          streamingInfo: {},
          firstAirYear: 2004,
          lastAirYear: 2005,
          episodes: [
            {
              type: "episode",
              title: "New Order (1)",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "New Order (2)",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Lockdown",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Zero Hour",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Icon",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Avatar",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Affinity",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Covenant",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Sacrifices",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Endgame",
              streamingInfo: {},
              year: 2004,
            },
            {
              type: "episode",
              title: "Gemini",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Prometheus Unbound",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "It's Good to Be King",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Full Alert",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Citizen Joe",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Reckoning (1)",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Reckoning (2)",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Threads",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Moebius (1)",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Moebius (2)",
              streamingInfo: {},
              year: 2005,
            },
          ],
        },
        {
          type: "season",
          title: "Season 9",
          streamingInfo: {},
          firstAirYear: 2005,
          lastAirYear: 2006,
          episodes: [
            {
              type: "episode",
              title: "Avalon (1)",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Avalon (2)",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Origin (3)",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "The Ties That Bind",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "The Powers That Be",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Beachhead",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Ex Deus Machina",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Babylon",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "Prototype",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "The Fourth Horseman (1)",
              streamingInfo: {},
              year: 2005,
            },
            {
              type: "episode",
              title: "The Fourth Horseman (2)",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Collateral Damage",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Ripple Effect",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Stronghold",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Ethon",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Off the Grid",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "The Scourge",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Arthur's Mantle",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Crusade",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Camelot",
              streamingInfo: {},
              year: 2006,
            },
          ],
        },
        {
          type: "season",
          title: "Season 10",
          streamingInfo: {},
          firstAirYear: 2006,
          lastAirYear: 2007,
          episodes: [
            {
              type: "episode",
              title: "Flesh and Blood",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Morpheus",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "The Pegasus Project",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Insiders",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Uninvited",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "200",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Counterstrike",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Memento Mori",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "Company of Thieves",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "The Quest (1)",
              streamingInfo: {},
              year: 2006,
            },
            {
              type: "episode",
              title: "The Quest (2)",
              streamingInfo: {},
              year: 2007,
            },
            {
              type: "episode",
              title: "Line in the Sand",
              streamingInfo: {},
              year: 2007,
            },
            {
              type: "episode",
              title: "The Road Not Taken",
              streamingInfo: {},
              year: 2007,
            },
            {
              type: "episode",
              title: "The Shroud",
              streamingInfo: {},
              year: 2007,
            },
            {
              type: "episode",
              title: "Bounty",
              streamingInfo: {},
              year: 2007,
            },
            {
              type: "episode",
              title: "Bad Guys",
              streamingInfo: {},
              year: 2007,
            },
            {
              type: "episode",
              title: "Talion",
              streamingInfo: {},
              year: 2007,
            },
            {
              type: "episode",
              title: "Family Ties",
              streamingInfo: {},
              year: 2007,
            },
            {
              type: "episode",
              title: "Dominion",
              streamingInfo: {},
              year: 2007,
            },
            {
              type: "episode",
              title: "Unending",
              streamingInfo: {},
              year: 2007,
            },
          ],
        },
      ],
    },
    {
      type: "series",
      title: "Star Trek",
      streamingInfo: {
        ar: [
          {
            service: "netflix",
            streamingType: "subscription",
            quality: "hd",
            link: "https://www.netflix.com/title/70136140/",
            videoLink: "https://www.netflix.com/watch/70136140",
            audios: [],
            subtitles: [],
            availableSince: 1648602771,
          },
        ],
      },
      firstAirYear: 1966,
      lastAirYear: 1969,
      imdbId: "tt0060028",
      tmdbId: 253,
      originalTitle: "Star Trek",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
      ],
      creators: ["Gene Roddenberry"],
      status: {
        statusCode: 4,
        statusText: "Ended",
      },
      seasonCount: 3,
      episodeCount: 79,
      seasons: [
        {
          type: "season",
          title: "Season 1",
          streamingInfo: {
            ar: [
              {
                service: "netflix",
                streamingType: "subscription",
                quality: "hd",
                link: "https://www.netflix.com/watch/70178514",
                videoLink: "https://www.netflix.com/watch/70178514",
                audios: [],
                subtitles: [],
                availableSince: 1704616065,
              },
            ],
          },
          firstAirYear: 1966,
          lastAirYear: 1967,
          episodes: [
            {
              type: "episode",
              title: "The Man Trap",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178514",
                    videoLink: "https://www.netflix.com/watch/70178514",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "Charlie X",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109436",
                    videoLink: "https://www.netflix.com/watch/70109436",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "Where No Man Has Gone Before",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109437",
                    videoLink: "https://www.netflix.com/watch/70109437",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "The Naked Time",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109438",
                    videoLink: "https://www.netflix.com/watch/70109438",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "The Enemy Within",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109439",
                    videoLink: "https://www.netflix.com/watch/70109439",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "Mudd's Women",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109440",
                    videoLink: "https://www.netflix.com/watch/70109440",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "What Are Little Girls Made Of?",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109441",
                    videoLink: "https://www.netflix.com/watch/70109441",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "Miri",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109442",
                    videoLink: "https://www.netflix.com/watch/70109442",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "Dagger of the Mind",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109443",
                    videoLink: "https://www.netflix.com/watch/70109443",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "The Corbomite Maneuver",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109444",
                    videoLink: "https://www.netflix.com/watch/70109444",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "The Menagerie (1)",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109445",
                    videoLink: "https://www.netflix.com/watch/70109445",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "The Menagerie (2)",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109446",
                    videoLink: "https://www.netflix.com/watch/70109446",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "The Conscience of the King",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109447",
                    videoLink: "https://www.netflix.com/watch/70109447",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "Balance of Terror",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109448",
                    videoLink: "https://www.netflix.com/watch/70109448",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "Shore Leave",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109449",
                    videoLink: "https://www.netflix.com/watch/70109449",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1966,
            },
            {
              type: "episode",
              title: "The Galileo Seven",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109450",
                    videoLink: "https://www.netflix.com/watch/70109450",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Squire of Gothos",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109451",
                    videoLink: "https://www.netflix.com/watch/70109451",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Arena",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109452",
                    videoLink: "https://www.netflix.com/watch/70109452",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Tomorrow Is Yesterday",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109453",
                    videoLink: "https://www.netflix.com/watch/70109453",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Court Martial",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109454",
                    videoLink: "https://www.netflix.com/watch/70109454",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Return of the Archons",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109455",
                    videoLink: "https://www.netflix.com/watch/70109455",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Space Seed",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109456",
                    videoLink: "https://www.netflix.com/watch/70109456",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "A Taste of Armageddon",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109457",
                    videoLink: "https://www.netflix.com/watch/70109457",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "This Side of Paradise",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109458",
                    videoLink: "https://www.netflix.com/watch/70109458",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Devil in the Dark",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109459",
                    videoLink: "https://www.netflix.com/watch/70109459",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Errand of Mercy",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109460",
                    videoLink: "https://www.netflix.com/watch/70109460",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Alternative Factor",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109461",
                    videoLink: "https://www.netflix.com/watch/70109461",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The City on the Edge of Forever",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109462",
                    videoLink: "https://www.netflix.com/watch/70109462",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Operation: Annihilate!",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70109463",
                    videoLink: "https://www.netflix.com/watch/70109463",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
          ],
        },
        {
          type: "season",
          title: "Season 2",
          streamingInfo: {
            ar: [
              {
                service: "netflix",
                streamingType: "subscription",
                quality: "hd",
                link: "https://www.netflix.com/watch/70178519",
                videoLink: "https://www.netflix.com/watch/70178519",
                audios: [],
                subtitles: [],
                availableSince: 1704616065,
              },
            ],
          },
          firstAirYear: 1967,
          lastAirYear: 1968,
          episodes: [
            {
              type: "episode",
              title: "Amok Time",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178519",
                    videoLink: "https://www.netflix.com/watch/70178519",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Who Mourns for Adonais?",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178518",
                    videoLink: "https://www.netflix.com/watch/70178518",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Changeling",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178522",
                    videoLink: "https://www.netflix.com/watch/70178522",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Mirror, Mirror",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178524",
                    videoLink: "https://www.netflix.com/watch/70178524",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Apple",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178523",
                    videoLink: "https://www.netflix.com/watch/70178523",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Doomsday Machine",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178520",
                    videoLink: "https://www.netflix.com/watch/70178520",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Catspaw",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178515",
                    videoLink: "https://www.netflix.com/watch/70178515",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "I, Mudd",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178526",
                    videoLink: "https://www.netflix.com/watch/70178526",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Metamorphosis",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178516",
                    videoLink: "https://www.netflix.com/watch/70178516",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Journey to Babel",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178529",
                    videoLink: "https://www.netflix.com/watch/70178529",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Friday's Child",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178517",
                    videoLink: "https://www.netflix.com/watch/70178517",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Deadly Years",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178525",
                    videoLink: "https://www.netflix.com/watch/70178525",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Obsession",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178532",
                    videoLink: "https://www.netflix.com/watch/70178532",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "Wolf in the Fold",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178521",
                    videoLink: "https://www.netflix.com/watch/70178521",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Trouble With Tribbles",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178527",
                    videoLink: "https://www.netflix.com/watch/70178527",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1967,
            },
            {
              type: "episode",
              title: "The Gamesters of Triskelion",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178531",
                    videoLink: "https://www.netflix.com/watch/70178531",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "A Piece of the Action",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178534",
                    videoLink: "https://www.netflix.com/watch/70178534",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "The Immunity Syndrome",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178533",
                    videoLink: "https://www.netflix.com/watch/70178533",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "A Private Little War",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178530",
                    videoLink: "https://www.netflix.com/watch/70178530",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Return to Tomorrow",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178536",
                    videoLink: "https://www.netflix.com/watch/70178536",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Patterns of Force",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178537",
                    videoLink: "https://www.netflix.com/watch/70178537",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "By Any Other Name",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178535",
                    videoLink: "https://www.netflix.com/watch/70178535",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "The Omega Glory",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178539",
                    videoLink: "https://www.netflix.com/watch/70178539",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "The Ultimate Computer",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178538",
                    videoLink: "https://www.netflix.com/watch/70178538",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Bread and Circuses",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178528",
                    videoLink: "https://www.netflix.com/watch/70178528",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Assignment: Earth",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178540",
                    videoLink: "https://www.netflix.com/watch/70178540",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
          ],
        },
        {
          type: "season",
          title: "Season 3",
          streamingInfo: {
            ar: [
              {
                service: "netflix",
                streamingType: "subscription",
                quality: "hd",
                link: "https://www.netflix.com/watch/70178546",
                videoLink: "https://www.netflix.com/watch/70178546",
                audios: [],
                subtitles: [],
                availableSince: 1704616065,
              },
            ],
          },
          firstAirYear: 1968,
          lastAirYear: 1969,
          episodes: [
            {
              type: "episode",
              title: "Spock's Brain",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178546",
                    videoLink: "https://www.netflix.com/watch/70178546",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "The Enterprise Incident",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178544",
                    videoLink: "https://www.netflix.com/watch/70178544",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "The Paradise Syndrome",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178543",
                    videoLink: "https://www.netflix.com/watch/70178543",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "And the Children Shall Lead",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178545",
                    videoLink: "https://www.netflix.com/watch/70178545",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Is There in Truth No Beauty?",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178547",
                    videoLink: "https://www.netflix.com/watch/70178547",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Spectre of the Gun",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178541",
                    videoLink: "https://www.netflix.com/watch/70178541",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Day of the Dove",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178551",
                    videoLink: "https://www.netflix.com/watch/70178551",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "For the World Is Hollow and I Have Touched the Sky",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178550",
                    videoLink: "https://www.netflix.com/watch/70178550",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "The Tholian Web",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178549",
                    videoLink: "https://www.netflix.com/watch/70178549",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Plato's Stepchildren",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178552",
                    videoLink: "https://www.netflix.com/watch/70178552",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Wink of an Eye",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178553",
                    videoLink: "https://www.netflix.com/watch/70178553",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "The Empath",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178548",
                    videoLink: "https://www.netflix.com/watch/70178548",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Elaan of Troyius",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178542",
                    videoLink: "https://www.netflix.com/watch/70178542",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1968,
            },
            {
              type: "episode",
              title: "Whom Gods Destroy",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178556",
                    videoLink: "https://www.netflix.com/watch/70178556",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "Let That Be Your Last Battlefield",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178555",
                    videoLink: "https://www.netflix.com/watch/70178555",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "The Mark of Gideon",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178557",
                    videoLink: "https://www.netflix.com/watch/70178557",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "That Which Survives",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178554",
                    videoLink: "https://www.netflix.com/watch/70178554",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "The Lights of Zetar",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178558",
                    videoLink: "https://www.netflix.com/watch/70178558",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "Requiem for Methuselah",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178561",
                    videoLink: "https://www.netflix.com/watch/70178561",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "The Way to Eden",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178560",
                    videoLink: "https://www.netflix.com/watch/70178560",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "The Cloud Minders",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178559",
                    videoLink: "https://www.netflix.com/watch/70178559",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "The Savage Curtain",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178562",
                    videoLink: "https://www.netflix.com/watch/70178562",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "All Our Yesterdays",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178563",
                    videoLink: "https://www.netflix.com/watch/70178563",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
            {
              type: "episode",
              title: "Turnabout Intruder",
              streamingInfo: {
                ar: [
                  {
                    service: "netflix",
                    streamingType: "subscription",
                    quality: "hd",
                    link: "https://www.netflix.com/watch/70178564",
                    videoLink: "https://www.netflix.com/watch/70178564",
                    audios: [],
                    subtitles: [],
                    availableSince: 1704616065,
                  },
                ],
              },
              year: 1969,
            },
          ],
        },
      ],
    },
    {
      type: "movie",
      title: "Stardust",
      streamingInfo: {
        ar: [
          {
            service: "apple",
            streamingType: "rent",
            quality: "uhd",
            link: "https://tv.apple.com/ar/movie/stardust---el-misterio-de-la-estrella/umc.cmc.535568gf8g1wriibl03pf1vqo",
            audios: [
              {
                language: "eng",
                region: "GBR",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "ara",
                  region: "SAU",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "bul",
                  region: "BGR",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "cmn",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "dan",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "deu",
                  region: "DEU",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "eng",
                  region: "GBR",
                },
                closedCaptions: true,
              },
              {
                locale: {
                  language: "fin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "heb",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ind",
                  region: "IDN",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "kor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nld",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "pol",
                  region: "POL",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "BRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "PRT",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "rus",
                  region: "RUS",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "swe",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tur",
                  region: "TUR",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "yue",
                  region: "",
                },
                closedCaptions: false,
              },
            ],
            price: {
              amount: "3.99",
              currency: "ARS",
              formatted: "3.99 ARS",
            },
            availableSince: 1654467340,
          },
          {
            service: "apple",
            streamingType: "buy",
            quality: "uhd",
            link: "https://tv.apple.com/ar/movie/stardust---el-misterio-de-la-estrella/umc.cmc.535568gf8g1wriibl03pf1vqo",
            audios: [
              {
                language: "eng",
                region: "GBR",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "ara",
                  region: "SAU",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "bul",
                  region: "BGR",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "cmn",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "dan",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "deu",
                  region: "DEU",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "eng",
                  region: "GBR",
                },
                closedCaptions: true,
              },
              {
                locale: {
                  language: "fin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "heb",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ind",
                  region: "IDN",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "kor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nld",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "pol",
                  region: "POL",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "BRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "PRT",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "rus",
                  region: "RUS",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "swe",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tur",
                  region: "TUR",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "yue",
                  region: "",
                },
                closedCaptions: false,
              },
            ],
            price: {
              amount: "5.99",
              currency: "ARS",
              formatted: "5.99 ARS",
            },
            availableSince: 1654467340,
          },
        ],
      },
      year: 2007,
      imdbId: "tt0486655",
      tmdbId: 2270,
      originalTitle: "Stardust",
      genres: [
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 10751,
          name: "Family",
        },
        {
          id: 14,
          name: "Fantasy",
        },
      ],
      directors: ["Matthew Vaughn"],
    },
    {
      type: "movie",
      title: "Stargate",
      streamingInfo: {
        ar: [
          {
            service: "apple",
            streamingType: "addon",
            quality: "hd",
            addon: "tvs.sbd.1000444",
            link: "https://tv.apple.com/ar/movie/stargate-la-puerta-del-tiempo/umc.cmc.4rhpt8ridzp8k3i5gsgpsd7mw",
            audios: [
              {
                language: "deu",
                region: "DEU",
              },
              {
                language: "eng",
                region: "USA",
              },
              {
                language: "fra",
                region: "FRA",
              },
              {
                language: "ita",
                region: "ITA",
              },
              {
                language: "por",
                region: "BRA",
              },
              {
                language: "spa",
                region: "419",
              },
              {
                language: "spa",
                region: "ESP",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "eng",
                  region: "",
                },
                closedCaptions: true,
              },
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
            ],
            availableSince: 1654560977,
          },
        ],
      },
      year: 1994,
      imdbId: "tt0111282",
      tmdbId: 2164,
      originalTitle: "Stargate",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
      ],
      directors: ["Roland Emmerich"],
    },
    {
      type: "movie",
      title: "Grown Ups 2",
      streamingInfo: {
        ar: [
          {
            service: "prime",
            streamingType: "subscription",
            quality: "sd",
            link: "https://www.primevideo.com/detail/0QBPFLU4OMYSMOON1X6YDHAIUL/ref=atv_dp",
            audios: [
              {
                language: "deu",
                region: "",
              },
              {
                language: "eng",
                region: "",
              },
              {
                language: "fra",
                region: "",
              },
              {
                language: "ita",
                region: "",
              },
              {
                language: "jpn",
                region: "",
              },
              {
                language: "por",
                region: "",
              },
              {
                language: "spa",
                region: "",
              },
              {
                language: "tur",
                region: "",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "dan",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "deu",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "eng",
                  region: "",
                },
                closedCaptions: true,
              },
              {
                locale: {
                  language: "fin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fra",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "heb",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "hin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "hun",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ita",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "jpn",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "kor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nld",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nob",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ron",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "rus",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "swe",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tha",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tur",
                  region: "",
                },
                closedCaptions: false,
              },
            ],
            availableSince: 1700964410,
          },
          {
            service: "netflix",
            streamingType: "subscription",
            link: "https://www.netflix.com/title/70267242/",
            audios: [],
            subtitles: [],
            availableSince: 1685657221,
          },
          {
            service: "apple",
            streamingType: "buy",
            quality: "uhd",
            link: "https://tv.apple.com/ar/movie/son-como-ninos-2/umc.cmc.2tr11i1gapt7zsoy24pl01owe",
            audios: [
              {
                language: "eng",
                region: "",
              },
              {
                language: "spa",
                region: "419",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "bul",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "cmn",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "dan",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "deu",
                  region: "DEU",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ell",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "eng",
                  region: "",
                },
                closedCaptions: true,
              },
              {
                locale: {
                  language: "fin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fra",
                  region: "FRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "heb",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ita",
                  region: "ITA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "kor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nld",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "pol",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "BRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "rus",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "ESP",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "swe",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tha",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tur",
                  region: "",
                },
                closedCaptions: false,
              },
            ],
            price: {
              amount: "12.99",
              currency: "ARS",
              formatted: "12.99 ARS",
            },
            availableSince: 1654499458,
          },
          {
            service: "hbo",
            streamingType: "subscription",
            quality: "hd",
            link: "https://play.hbomax.com/page/urn:hbo:page:GYhlKbwe6caOvtgEAAAAJ:type:feature",
            videoLink:
              "https://play.hbomax.com/feature/urn:hbo:feature:GYhlKbwe6caOvtgEAAAAJ",
            audios: [
              {
                language: "eng",
                region: "USA",
              },
              {
                language: "por",
                region: "BRA",
              },
              {
                language: "spa",
                region: "419",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "por",
                  region: "BRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
            ],
            leaving: 17174699400,
            availableSince: 1654559746,
          },
        ],
      },
      year: 2013,
      imdbId: "tt2191701",
      tmdbId: 109418,
      originalTitle: "Grown Ups 2",
      genres: [
        {
          id: 35,
          name: "Comedy",
        },
      ],
      directors: ["Dennis Dugan"],
    },
    {
      type: "movie",
      title: "The Empire Strikes Back",
      streamingInfo: {
        ar: [
          {
            service: "disney",
            streamingType: "subscription",
            quality: "uhd",
            link: "https://www.disneyplus.com/movies/star-wars-the-empire-strikes-back-episode-v/iqtDTZAewwYl",
            videoLink:
              "https://www.disneyplus.com/video/90ff6e09-afd3-4d46-a2cb-80e3767e67ea",
            audios: [
              {
                language: "ces",
                region: "",
              },
              {
                language: "cmn",
                region: "",
              },
              {
                language: "deu",
                region: "",
              },
              {
                language: "eng",
                region: "",
              },
              {
                language: "fra",
                region: "FRA",
              },
              {
                language: "hun",
                region: "",
              },
              {
                language: "ita",
                region: "",
              },
              {
                language: "jpn",
                region: "",
              },
              {
                language: "kor",
                region: "",
              },
              {
                language: "pol",
                region: "",
              },
              {
                language: "por",
                region: "BRA",
              },
              {
                language: "slk",
                region: "",
              },
              {
                language: "spa",
                region: "419",
              },
              {
                language: "spa",
                region: "ESP",
              },
              {
                language: "tur",
                region: "",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "ces",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "dan",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "deu",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ell",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "eng",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fra",
                  region: "FRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "hun",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "isl",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ita",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "jpn",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "kor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nld",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "pol",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "BRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "PRT",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ron",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "slk",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "ESP",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "swe",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tur",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "zho",
                  region: "HKG",
                },
                closedCaptions: false,
              },
            ],
            availableSince: 1649720936,
          },
        ],
      },
      year: 1980,
      imdbId: "tt0080684",
      tmdbId: 1891,
      originalTitle: "The Empire Strikes Back",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 14,
          name: "Fantasy",
        },
      ],
      directors: ["Irvin Kershner"],
    },
    {
      type: "movie",
      title: "Return of the Jedi",
      streamingInfo: {
        ar: [
          {
            service: "disney",
            streamingType: "subscription",
            quality: "uhd",
            link: "https://www.disneyplus.com/movies/star-wars-return-of-the-jedi-episode-vi/6QGKo5mjDBS8",
            videoLink:
              "https://www.disneyplus.com/video/1b9be263-68b4-44bd-a358-9760c53f7737",
            audios: [
              {
                language: "ces",
                region: "",
              },
              {
                language: "cmn",
                region: "",
              },
              {
                language: "deu",
                region: "",
              },
              {
                language: "eng",
                region: "",
              },
              {
                language: "fra",
                region: "FRA",
              },
              {
                language: "hun",
                region: "",
              },
              {
                language: "ita",
                region: "",
              },
              {
                language: "jpn",
                region: "",
              },
              {
                language: "kor",
                region: "",
              },
              {
                language: "pol",
                region: "",
              },
              {
                language: "por",
                region: "BRA",
              },
              {
                language: "slk",
                region: "",
              },
              {
                language: "spa",
                region: "419",
              },
              {
                language: "spa",
                region: "ESP",
              },
              {
                language: "tur",
                region: "",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "ces",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "dan",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "deu",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ell",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "eng",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fin",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fra",
                  region: "CAN",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "fra",
                  region: "FRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "hun",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "isl",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ita",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "jpn",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "kor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nld",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "nor",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "pol",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "BRA",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "por",
                  region: "PRT",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "ron",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "slk",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "spa",
                  region: "ESP",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "swe",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "tur",
                  region: "",
                },
                closedCaptions: false,
              },
              {
                locale: {
                  language: "zho",
                  region: "HKG",
                },
                closedCaptions: false,
              },
            ],
            availableSince: 1649557755,
          },
        ],
      },
      year: 1983,
      imdbId: "tt0086190",
      tmdbId: 1892,
      originalTitle: "Return of the Jedi",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 14,
          name: "Fantasy",
        },
      ],
      directors: ["Richard Marquand"],
    },
    {
      type: "movie",
      title: "Star Trek",
      streamingInfo: {
        ar: [
          {
            service: "netflix",
            streamingType: "subscription",
            link: "https://www.netflix.com/title/70101276/",
            audios: [],
            subtitles: [],
            availableSince: 1699151442,
          },
          {
            service: "apple",
            streamingType: "rent",
            quality: "uhd",
            link: "https://tv.apple.com/ar/movie/star-trek/umc.cmc.1qfm0vxptnl42u4jclqwbtxt9",
            audios: [
              {
                language: "eng",
                region: "USA",
              },
              {
                language: "spa",
                region: "419",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
            ],
            price: {
              amount: "3.99",
              currency: "ARS",
              formatted: "3.99 ARS",
            },
            availableSince: 1654508450,
          },
          {
            service: "apple",
            streamingType: "buy",
            quality: "uhd",
            link: "https://tv.apple.com/ar/movie/star-trek/umc.cmc.1qfm0vxptnl42u4jclqwbtxt9",
            audios: [
              {
                language: "eng",
                region: "USA",
              },
              {
                language: "spa",
                region: "419",
              },
            ],
            subtitles: [
              {
                locale: {
                  language: "spa",
                  region: "419",
                },
                closedCaptions: false,
              },
            ],
            price: {
              amount: "9.99",
              currency: "ARS",
              formatted: "9.99 ARS",
            },
            availableSince: 1654508450,
          },
        ],
      },
      year: 2009,
      imdbId: "tt0796366",
      tmdbId: 13475,
      originalTitle: "Star Trek",
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
      ],
      directors: ["J.J. Abrams"],
    },
  ],
};

const SearchBar = () => {
  // const [movies, setMovies] = useState([]);

  // const getMovies = async () => {
  //   const title = "star wars";
  //   const country = "ar";

  //   const url = `https://streaming-availability.p.rapidapi.com/search/title?title=${title}&country=${country}&show_type=all&output_language=en`;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "1fbb965758msh507653a9f8a9253p144052jsnfac6f700e136",
  //       "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  //     },
  //   }

  //   try {
  //     const response = await fetch(url, options);
  //     const results = await response.json();
  //     console.log(results)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  // filter the response of the api

  return (
    <>
      <div className="flex flex-row justify-center items-center m-15">
        <select className="my-5 mr-1 p-2 rounded-l-3xl text-slate-400 h-10">
          <option value="ar" className="mt-10">FLAG + Country</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <input
          type="text"
          placeholder="Type a movie or serie"
          className="my-5 mr-2 py-2 px-3 rounded-r-3xl w-1/3"
        />
        
        <btn className="bg-purple-600 m-15 py-2 px-3 rounded-3xl">Search</btn>
      </div>

      <div>
        <MoviesList />
      </div>
    </>
  );
};

export default SearchBar;
