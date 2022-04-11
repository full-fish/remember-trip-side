const { diary, hashtag, diary_hashtag } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      const data = await diary.findAll();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },

  post: async (req, res) => {
    try {
      const { trip_id, county, location, content, write_date, hashtags } = req.body;
      //해쉬태그 제외한 다이어리 추가
      const diaryPayload = {
        trip_id: trip_id,
        county: county,
        location: location,
        content: content,
        write_date: write_date,
      };

      //   const data2 = await hashtag.findAll();
      //   console.log(data2);

      const diaryInfo = await diary.create(diaryPayload);

      //해쉬태그 추가 // map같은거 배열로 오는 해쉬태그를 하나하나추가 / 해쉬태그 중복여부
      hashtags.map(async (ele) => {
        const data = await hashtag.findOne({
          where: {
            hashtags: ele,
          },
        });

        //해쉬태그가 이미 있는게 아닐경우 (없을 경우)
        let hashtagInfo = data;
        if (!data) {
          const hashtagPayload = {
            hashtags: ele,
          };
          hashtagInfo = await hashtag.create(hashtagPayload);
        }

        //조인테이블 추가
        const diary_hashtagPayload = {
          diary_id: diaryInfo.dataValues.id,
          hashtag_id: hashtagInfo.dataValues.id,
        };
        await diary_hashtag.create(diary_hashtagPayload);
      });
      res.status(201).send("ok");
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },
};
//!
//       const hashtagPayload = {
//         content: content,
//       };
//       let hashtagInfo;
//       for (let i = 0; i < 1; i++) {
//         hashtagInfo = await hashtag.create(hashtagPayload);
//       }
//       //조인테이블 추가
//       const diary_hashtagPayload = {
//         diary_id: diaryInfo.dataValues.id,
//         hashtag_id: hashtagInfo.dataValues.id,
//       };
//       res.status(201).send("ok");
//       await diary_hashtag.create(diary_hashtagPayload);
//     } catch (err) {
//       res.status(500).send("Server Error Code 500");
//     }
//   },
// };
