const { diary, hashtag, diary_hashtag } = require("../../models");
const tokenHandler = require("../tokenHandler");

module.exports = {
  get: async (req, res) => {
    try {
      const validity = tokenHandler.accessTokenVerify(req);
      if (validity) {
        const data = await diary.findAll({ where: { trip_id: req.params.trip_id } });
        res.status(200).json(data);
      }
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },

  post: async (req, res) => {
    try {
      const validity = tokenHandler.accessTokenVerify(req);
      if (validity) {
        const { location, content, write_date, hashtags } = req.body;
        //해쉬태그 제외한 다이어리 추가
        const diaryPayload = {
          trip_id: req.params.trip_id,
          location: location,
          content: content,
          write_date: write_date,
        };

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
        res.status(201).send({ id: diaryInfo.id, message: "Successfully Account Post" });
      }
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },
  delete: async (req, res) => {
    try {
      const validity = tokenHandler.accessTokenVerify(req);
      if (validity) {
        const id = req.params.diary_id;
        await diary.destroy({
          where: { id: id },
        });
        res.status(200).json("Successfully Diary Deleted");
      }
    } catch (err) {
      res.status(500).send("Server Error Code 500");
    }
  },
  patch: async (req, res) => {
    //patch 하나만 바꾸는거고 put은 모든거 지정(지정안한거 null됨)
    try {
      const validity = tokenHandler.accessTokenVerify(req);
      if (validity) {
        await diary.update(
          { content: req.body.newContent },
          { where: { id: req.params.diary_id } }
        );
        res.status(200).json("Successfully Diary Deleted");
      }
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
