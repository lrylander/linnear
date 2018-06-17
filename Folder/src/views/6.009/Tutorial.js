import React, {Component} from "react";
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.009/Tutorial1" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Tutorial 1
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/qvs_1kg7B-oSAFQec_8iUP8U75yAaV3oOpRhyvkgH0iq6pAXSKYJbf528WdBr29cYHAFT789Rn9xZc3Xb5F13hYtT3C2bDFKyzAHgjocjYOb97Knypk48qFue9JAwuqLn0gcKuVCkE7xWM0dW_QblW6snY1-KM4ibSq9vzVUwwRbyIbG_PQ1sQqCr90IhqsZhFN0epFDPX35ZN2IHpdVO3dnP2dzClFHNTlDFtBbr619CpTcrDK6OxWF2tN7Bor9NVrSBq4t8PFmHQzyi-zmmTwTtkvFDxm88vpNJEwFhPqOMV9VMVif7cogcPjeyaPrf7rfxAnD_ulvFPYSVZOzMQavUw-cHcrC4jRhE7Azl2dacc6ENAGfkLUvVoNvzoDTYVZemUdelzZQAPejDnuUgjO5nfDXf5FNupvO6fLcYrnPQWAmxkJeFrygRpwJR0WofFPP4bWvtKiSvMr0JXWn1lwiDfHSx5G0vouvp5eSo8VeGxnRHeZwjhuzf1jB95Aczo08jrxWiKozgKEUjyLD-4_X7-67jJp43XDy8gsn1eq-La6PMj7X8ZgDI34q6vLHx2uHA-OtoBrEOEvqFtwe-lHF-gLG3G8VD0uqKJY=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.009/Tutorial2" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Tutorial 2
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/piuBNzZKiPCIyEp5hWCaYh1HCmfTmC6l5v6dvDYhzZsoUmNPIHRusLAFIk_6corBc-1IbgIqGxxlFNJmoiJIYm3_6gRlrlkZwx4baVKQZLbcNkmKveFrN5Aq6YI8W-2UiQGcMXWsR8zUjgonntrEuZ09OJi64KG4a_4yAvATinES0uLY1QDp267X_5-X7qm9gLtYDWbjIW4kqhuF4OGYlm7QccOMpwkUQU_wv-ujitB-hPHwh99mnNJ5rtGm39L7Qj6eYwiZp5nxD2gh5QK3t12J9SLjQYKi82MzOLyTjL2MhwK9Y3hZv_rp89GgkHt1z_n5gBiZZSXp7Vl1aweXL3gGQa3zRKMnozvP60tFDXBJLYH5Zg5OAKcM67uYfcKRtWc5PNy8b7ZhNBk2LFJhfxG8ef2vPYJejq93T9nNbpqEefX24OWe1VchSVRrO185QHnzPIwQjTe7BYf4NyQwg1J70vsD-iTH1SlsnCoDBUA2kJhZDTO2qRvZFxkSm18_8TsvMU_qYWCDnXDy905tfgmuuYhsu8C8XCxLXrx7stznLul_GbN79oBrPdU6bzA3avHQPWj16U-87qFf50M63Mci14ZucR8MZSC0iGI=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.009/Tutorial3" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Tutorial 3
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/3dROvKs8Ktz8KdM9hFFapyGDMHKq00ycPX6nA9FBInMTOtIO0JXJvVBnu2aPzfoWPz6Igmzyskgoax4rEAVX50D5yVbxyGG4ERcQmthvTVkQpjxUzi1JDn0BVEG1UFYtizLE8fISdhQuqmXdfi6djhkg64GHeWkmczmdXDyL9w-NEf__r9xQeAk0KWTHqo93iESP-QTt9ux_pffL_qLS-akqr1PwqV11D2u8bnnX6S0u98pEj5rz_Zx7lE05SaDLBSDN-pQcHc2MONbmgaaTvCgW0dwL0VB3BBqYrmaMiI1mU_3ujexuQstK-uoB_hNOJiB-i1d51cvTCUJmRbptIIN8MBnFJksYGIw8IvqTHxqNRQizFB1vZeI5NiEHNYmY9l34zHF__T_S8uiDrcp3Fa5CbhFgNwZSpQn7tATM7B7zYI_BVJglgktvzmMNAxuy01uUNep2IkmGdjxPG9LJgY5-mHq8ZmmqqUYcS5HYL4Ke-MB42xzDhkmeQAv6VvOOOq4Cz3qMJrQfDI8-569sQZq_IyY2u8Z3U0IH9cQl5UoA3R9LO8xz0NTHdeWzUXLfaePzLZtS7j_owb2j-OjkFwaVk68VBLX3rrGURMw=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.009/Tutorial4" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Tutorial 4
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/TyOE_Q57OBtAwCLKmIma8sTbJoJeuR0cQ127xuYZTfOmCS0lW-2BJz5SZynrb22X_NH1qL78KDoa5UvR6trF99YHCVcXROIUOE5HyFuSRmzSvE3j0K155MspPFeIOZILzLl7X1GkBfbN32tblUgMuJ4o6aMsxDzFcKRmkRGvlSVjoNdynQgHXqdrSdy_rytCLdgFumvkKQjj9WkMwcwwSF_j3CpOHCcQdRiQ6Ni2GTtteqYHi-FYRNoKdBkhxk4lw0H7sx8dV_phGBqY77VzEh8l4dA0nRkirf6lrDPqktAOwDeMXtgWR-4tQY2OKPhExT9q1rUR5BONAyvqBnXvCwdFUbL5er7u1cuXWH0gWIuREQiMMhwULOk6FBBDPXoFshGKb3n2GpmiWP352sK65y934qsjPBnEtav4rLZKdlDLll81Hxd4wxHqif8FNxD9AZ0jP-kv9-nIzLNVXg_8SUz0lnn1tj0NHdZs0NX6QsOfUFmeRuVOsPgIDVXFajR_Ose-BCxldZm4KMyOFRJy341Q6kITy_qDdIEp8mGoumpQ8Nl7NYrCcBcLiE5OFCvakf9xvNZK7jWY8DffWz-TseY9Qd1fhuyhmkjauwo=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.009/Tutorial5" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Tutorial 5
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/IENECEi8ESE0Cv7sboVQ7HNYVKw4f74YXY1z22GVbSqrUntHrV2_1zgDTQPGQuShaTZ1xJoG9BTXo5QaM3Xgn4GUgth8YhxluXv3WOjM2ScCP9kBlrIUAKDW4OQO9hER_911A0bpcrxobUtT8VW94Cmihu48wO7DM5uTUS923Ub84BGcDOT1iTWGH-PhTTb7WobU344RXKjZCsCJyzJrjGoTFWoqCgpJr988URpv6sNgCyWBbYXuqMtGrgS2xX4bbUfgT-t3mTMCFyJvyky8iIv8LnbYNsMz4a7TO7EezucqcshG2AHUolSKJU1MGORGtBpt-D3jzd14P9f7H2at7EQkZWu1icPjIZPTBf55sBqyFDeXxNHnIb1uh8ySoifotlOq0Kjw-WUnNMfqN3i1P7KMa35DVumSGENkHiD73L8k355jiR7i6IR4GCyP3rVWWXqnPLmSMjyIuh7bl_dn4wLVXDKHxHb-ziGEeq5n1BIxQD-OYkIdtf69NmrBVg5onyQKBq0dEBrEweFZ7J6deWmjk0OxO8FGqtbg3zfOOYhdJL_I-uvS0BH9NHvjB_7ko5pXMIyErMMmixPRYJsMoY-H0Yzho6WovC9oQX4=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.009/Tutorial6" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Tutorial 6
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/HsK7rU7FCoKCfEqfrMxgu9qLzlpFxKxgauY8qsQo3qw0pMdoOqQ85IvDeTp_qQa32yBwDFubPqdgTQLsbdt4IKQ3zEe-RDa-ctyzSy-QOevYS6LJqTCV1NIavIaTaSOfl1gZMSAxI8elXc-9dtEYSA9J3FDAXEyDZF8tWsVFdNkbNZbX5sVns1BtYN6I8TWdo-822GlQn-MLi4iGygGakqlMZJgbjHmykPBRRGoIFGRFZHx5jbUECPVifm5wE-061GM7DoRGPwpG3K6jItWYh5RyB7NXAmqop1Ot4-KByfo290xeIwfFfMnGuRu0aRlE_pIi0NdUZwSkzQIX0HzE38k_hf2AhpMS_51e4FZejo4U9zGeqAIjqQm_AowCz9srfUclm78SwjCuvZRPv5gkKpLiMbgfEy8e6yduDAu0gC-TIjQJRVyY0B0i60eSBc-onyLHLWru7qEyleWy1UvbIoP73ZqQdBj2AV0oFLpr9ak7RNYXZLQFnAejUBrZ9lPgaOcGnbSdI5ZGTWOY17S7tvvndTyStrkyJ5edECZ8yIs349h_fg6Q05xxsEAwdoXmxreIiEsgZTN5Euwm_-LPy56okUOpbeUP3SezU8c=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.009/Tutorial7" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Tutorial 7
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/w62fq2M5MltpRUlsy8_wAKQGCIwlxznatmlT0z8_WWsZB7aZIQbu1sfaTpdh2oae7qkAc_KJ8LUjX_Eb5UA0Y0H_i1ok5MH0TvaMZLEtRlbFE6XIcj6P-92ekKU2q6SOJG_PJSK54ce6Bjph6yjsfnrdXcdwLNbRaHPvJifgZa2b7go7RB1mrZ8dEM53wB0rR3hHJIj5M78mn_K3cGKu2QxCtFvWIvH5TaLgjDs8AYkHZYYU0NXEopvGy1ylhn-aVtgiMUQiA4Mwr5gqR8tsI7jBru3fB8BvqewgIgcDxhY4TbhMp2HZQlzt8LYmBSFTkJmds2iCY6fRgf91vc_itjkVP5TIzRnZ-aq083DRRDsIOZblMLOuFptmrXSReXHfif0DK5oR8WwD3OpRbyDIgEMKNLff8qrCQO7CTU0-5fdrHS0OAqd3-_upkzIUxZpu9cTEuVMG0q6V1ci30q8L31UZ-qR8bdirPgLf7LQ03IucWPm8MxAsG4QaWY4XpFD1UpdelOj23je85YcC7WLv1s8KUP8CJRigm2yaJ4PaDSgzhhbOsLtAo6dOuJbFVvdZH0fJzvrCfyjJxsZnB84KLjd_rYsGyA_KzjbYUHI=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.009/Tutorial8" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Tutorial 8
              </CardHeader>
             <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/qxeqBYACUYSEcgYmB7QsAsXhw_mcj7-L_V093_R_tkIRBNZ2nwhJRkDeVuYMb4pMuHihU_b1uVsDYMXFH6AWm8iCd9WmCEkyACS3y42LnSj34wCdRpJZN1yvA937i7rH6ROUYU6V2CKVUeik51rEkbP4myLbdj74mmYGWGbAiLLM_gyG0M40IW8tx9shd9fT02FXYF3C7jSbRYfTZxN50PoHQhMtkVzVVZQuHBHYDakRAc-64Vs5imYsRLNdT1WhkShjY5NstlAEHnHtM7FNKVGxICt1MFq5j0fGkHXHDruhbTrp38vv8GGI_MnSWyKpcK57GCj2AcKiR6M9IdFPRsBpCVcYuOmOcs-DoYtyNIB6zvzLNMSHLns9c86Ek5ifTqPEdLBjleZ_cG_gZGgXHsKNZbT3mNh6QiFy0-tVnRTec7bx9Lk8SJ1eoB6wF2K1Eb9YOxzZihftMOUOnWlCmJKY_phcmebua4rS1R0gk6ExDtJtOG762LMKh9uP0mytH1tlT_Y3GmxiOCgQceRyW6mSA0JNEclGELvBd9QGf8U1DEI2TvOus19GDk0mv5jGxTphMkddOd0KQ9pnxV_gk_jmpGC7B1BFgaa1l2Y=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
          <Col xs="12" sm="6" md="4">
          <a href="#/6.009/Tutorial9" style={{ textDecoration: 'none', color: "black" }}>
            <Card className="card-accent-primary">
              <CardHeader>
                Tutorial 9
              </CardHeader>
              <CardBlock className="card-body">
                <img width="100%" src="https://lh3.googleusercontent.com/6S4iBjGW7mszHkoHrgSKO6Tzjc4Kc39ODGCt8E9e-5gqLFu7o_jImWWK-m-jBAkJtuwtWv7bBH0inc4Vyd-dtP2i-PG88WLiXFjj37aynbZiN2U-j2jII2cfy5uxG9F9NhDvQfyuKkUgNCIE6pPrbgoiS2BryQ_EXvlaVg5eVVvL2ko-yfNisQ9Rm-3T9XQ4pWv9tjkK9Amtcq7wxhDhuUa-eu-gZAHIJpwlAFBSrxCxAgYhBZRPa3WKb2H1C70dpwzFvPW-qg4rEOJr0WymBkL4vPF09TnSCxnxXBVbOZKxpFC-uB7vOWuKyxu6ak6JEVg7D83AHUkTX2qFxeO9D2xtlyhTOs1w_KmKnHl0lHJYJtJG9hm5wPQ1sSkdIkYJ1vjEa49s0q0OtCwfISzRTi6z1qvOpFNjLRuPKLOhmb6RT7sAdbqyhTVTvOOHGpJj_nGeR5-0QI4vwM_tmnAZ5YOTsrNio1zUOqWOJFjfWlM7E8CJrUERuerc6TNLmXCUhebe4je5o8oEMUZtSMEk9S-rigPGtVjFQwUjcaFuqlwX7qa43vgILS76eDgV8f8kYOCc7zjjQspTFSOJDRMQzT45PUN5X4W1FTHbf24=w1315-h1700-no"/>
              </CardBlock>
            </Card>
          </a>
          </Col>
        </Row>

      </div>

    )
  }
}

export default Cards;