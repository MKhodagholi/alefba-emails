import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

const developementMode = false;

const baseUrl = developementMode ? "/static/" : "https://alefba-ocr.ir/email/";

const HeaderImage = () => (
  <Section className="px-[40px] pt-[44px]">
    <Img src={`${baseUrl}header_banner-icon.png`} alt="" className="w-full" />
  </Section>
);

const BodyContent = () => (
  <Section className="w-full max-w-[620px] py-[45px] px-[65px] pb-[115px] bg-transparent">
    <Section className="px-[40px] rounded-[5px]">
      <Heading className="text-black text-2xl font-normal text-right p-0 my-[30px] mx-0">
        خوش آمدید!
      </Heading>
      <Text className="text-black text-[24px] font-normal text-right p-0 my-[30px] mx-0">
        خوشحالیم که همراه مایی
      </Text>
      <Text className="text-base text-right">
        یک متن درباره اینکه به روشن خوش آمدید و این چیزا! لورم ایپسوم متن ساختگی
        با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
        ابزارهای کاربردی می باشد.
      </Text>
      <Section dir="ltr" className="pt-2">
        <Link
          href="#"
          className="bg-black pt-3 pb-4 px-4 text-white text-base rounded-[5px]"
        >
          بیشتر بدانید
        </Link>
      </Section>
    </Section>
  </Section>
);

const Footer = () => (
  <Section className="bg-black text-center pt-6">
    <Section className="w-[68px] mx-auto mb-[6px]">
      <Img className="w-[68px]" src={`${baseUrl}roshan-logo.png`} alt="" />
    </Section>
    <Text className="text-white text-xs my-0">
      شرکت دانش بنیان “راهکار پردازش ژرف”
    </Text>
    <Text className="text-[#7E7E7E] text-xs m-2">
      تهران، میدان ولیعصر، بلوار کریمخان، خیابان به آفرین، پلاک 30{" "}
    </Text>
    <Section className="w-full bg-black">
      <Row className="w-[220px]">
        <Column>
          <Text className="text-[#7E7E7E] m-0 text-xs" dir="ltr">
            +98 21 88943638
          </Text>
        </Column>
        <Column className="text-[#7E7E7E] m-0" dir="ltr">
          |
        </Column>
        <Column>
          <Text className="text-[#7E7E7E] m-0 text-xs" dir="ltr">
            +98 21 88908710
          </Text>
        </Column>
      </Row>
    </Section>
    <Section className="w-full bg-black pb-6">
      <Row className="w-[100px] mt-1">
        <Column align="center">
          <Link href="#instagram">
            <Img
              className="w-[19px] h-[19px]"
              src={`${baseUrl}instagram-icon.png`}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link href="#twitter">
            <Img
              className="w-[19px] h-[19px]"
              src={`${baseUrl}twitter-icon.png`}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link href="#facebook">
            <Img
              className="w-[19px] h-[19px]"
              src={`${baseUrl}facebook-icon.png`}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link href="#linkedin">
            <Img
              className="w-[19px] h-[19px]"
              src={`${baseUrl}linkedin-icon.png`}
            />
          </Link>
        </Column>
      </Row>
    </Section>
  </Section>
);

export const AlefbaEmail = () => {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <Preview>پیام خوش آمدگویی تیم الفبا به کاربران محترم الفبا</Preview>
      <Tailwind>
        <Body className="w-full my-auto mx-auto font-sans " dir="rtl">
          <Container className="w-full max-w-[620px] bg-[#FCFCFC] my-[40px] mx-auto">
            <HeaderImage />
            <BodyContent />
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AlefbaEmail;
