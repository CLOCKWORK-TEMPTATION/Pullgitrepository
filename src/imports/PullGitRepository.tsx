import clsx from "clsx";
import imgImageWithFallback from "figma:asset/e03fc087e083c3e9c6a492ad65a36616dc9e7b94.png";
import imgImageWithFallback1 from "figma:asset/154a5d28e15cee4ad0d4bfdd0c9ec5215ba71766.png";
import imgImageWithFallback2 from "figma:asset/adeb38ef5d29b295722e3ec8d86f1691cbc4759f.png";
import imgImageWithFallback3 from "figma:asset/d5d6a19a420654827a14d57b91b2389a54ea1043.png";
import imgImageWithFallback4 from "figma:asset/0214682e75b03aa19e57f1498835a874ee1f39ac.png";
import imgImageWithFallback5 from "figma:asset/87d3b362e6f16b972fd7f4105f58436d1150c16b.png";
import imgImageWithFallback6 from "figma:asset/7e804cac34c965eca4b366f8bf1f49a4460aad42.png";
import imgImageWithFallback7 from "figma:asset/027ecab13e6edd28e3096a5ab7c73471d33f8d8c.png";
import imgImageWithFallback8 from "figma:asset/bcd454fdf6536e4e37438caad1ff5407b7225ff0.png";
import imgImageWithFallback9 from "figma:asset/ff0f46611bf2a852c90a8ab1906b37448a452db6.png";
import imgImageWithFallback10 from "figma:asset/43ee2eda3b06822988018379a6d46e9e8fd76840.png";
import imgImageWithFallback11 from "figma:asset/4e0003de878bb4e2c354eb87482d520cf582a7d6.png";
import imgImageErrorLoadingImage from "figma:asset/edffef3b6f4bfa9bfcfbd993505eace4bf871048.png";
import imgImageWithFallback12 from "figma:asset/5bc08d4dfafffe3561dfdd56f51c7d1671e62679.png";
import imgImageWithFallback13 from "figma:asset/f98c2b4257c0f0642e749d9e60d5be36c47d9b78.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={additionalClassNames}>
      {children}
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("absolute flex h-[314.593px] items-center justify-center w-[336.893px]", additionalClassNames)}>{children}</Wrapper2>;
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper2 additionalClassNames={clsx("absolute flex h-[363.259px] items-center justify-center w-[376.969px]", additionalClassNames)}>{children}</Wrapper2>;
}
type Container7HelperProps = {
  additionalClassNames?: string;
};

function Container7Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Container7HelperProps>) {
  return <Wrapper2 additionalClassNames={clsx("absolute flex h-[394.731px] items-center justify-center w-[401.807px]", additionalClassNames)}>{children}</Wrapper2>;
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[275.31px] opacity-90 relative rounded-[8px] w-[301.512px]">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[1.073px] px-[1.073px] relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("bg-[rgba(255,255,255,0)] h-[289.229px] opacity-90 relative rounded-[8px]", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[1.113px] px-[1.113px] relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[294.674px] opacity-90 relative rounded-[8px] w-[308.635px]">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[1.122px] px-[1.122px] relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]">
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.73px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
        {text}
      </p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="absolute h-[16px] left-0 opacity-0 top-[20px] w-[469px]">
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium leading-[16px] left-[234.53px] not-italic text-[#ffd700] text-[12px] text-center text-nowrap top-[-1px] tracking-[1.2px] translate-x-[-50%] uppercase" dir="auto">
        {text}
      </p>
    </div>
  );
}

export default function PullGitRepository() {
  return (
    <div className="bg-white relative size-full" data-name="Pull Git Repository">
      <div className="absolute h-[862px] left-0 top-0 w-[1920px]" data-name="pS" />
      <div className="absolute bg-black h-[862px] left-0 overflow-clip top-0 w-[1920px]" data-name="UILauncherPage">
        <div className="absolute bg-black border-2 border-[rgba(255,255,255,0.2)] border-solid h-[425px] left-[483px] overflow-clip rounded-[10px] top-[218.5px] w-[954px]" data-name="LauncherCenterCard">
          <div className="absolute h-[421px] left-0 top-0 w-[950px]" data-name="Container">
            <Container7Helper additionalClassNames="left-[106.93px] top-[-17.39px]">
              <div className="flex-none rotate-[336deg]">
                <Container>
                  <div className="h-[292.43px] relative shrink-0 w-full" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
                  </div>
                </Container>
              </div>
            </Container7Helper>
            <Container7Helper additionalClassNames="left-[414.58px] top-[108.15px]">
              <div className="flex-none rotate-[24deg]">
                <Container>
                  <div className="h-[292.43px] relative shrink-0 w-full" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
                  </div>
                </Container>
              </div>
            </Container7Helper>
            <Wrapper additionalClassNames="left-[177.89px] top-[10.64px]">
              <div className="flex-none rotate-[344deg]">
                <Container1 additionalClassNames="w-[309.225px]">
                  <div className="h-[287.002px] relative shrink-0 w-full" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
                  </div>
                </Container1>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="left-[383.16px] top-[95.87px]">
              <div className="flex-none rotate-[16deg]">
                <Container1 additionalClassNames="w-[309.226px]">
                  <div className="h-[287.002px] relative shrink-0 w-full" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
                  </div>
                </Container1>
              </div>
            </Wrapper>
            <Wrapper1 additionalClassNames="left-[252.99px] top-[45.87px]">
              <div className="flex-none rotate-[352deg]">
                <Container2>
                  <div className="h-[273.164px] relative shrink-0 w-full" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
                  </div>
                </Container2>
              </div>
            </Wrapper1>
            <Wrapper1 additionalClassNames="left-[357.18px] top-[87.83px]">
              <div className="flex-none rotate-[8deg]">
                <Container2>
                  <div className="h-[273.164px] relative shrink-0 w-full" data-name="ImageWithFallback">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
                  </div>
                </Container2>
              </div>
            </Wrapper1>
            <div className="absolute bg-[rgba(255,255,255,0)] h-[252.594px] left-[332.5px] opacity-90 rounded-[8px] top-[84.19px] w-[285px]" data-name="Container">
              <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
                <div className="h-[250.594px] relative shrink-0 w-full" data-name="ImageWithFallback">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
            </div>
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.2)] content-stretch flex flex-col h-[60px] items-start left-[381.92px] top-[180.5px] w-[186.172px]" data-name="Container">
            <div className="h-[40px] relative shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Heading 2">
              <p className="absolute font-['Cairo:Black',sans-serif] font-black leading-[40px] left-[93.16px] not-italic text-[36px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                النسخة
              </p>
            </div>
            <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
              <p className="absolute font-['Cairo:Regular',sans-serif] font-normal leading-[20px] left-[93px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-center text-nowrap top-0 tracking-[0.7px] translate-x-[-50%]" dir="auto">
                أدوات صناعة المحتوى السينمائي
              </p>
            </div>
          </div>
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[421px] left-0 rounded-[10px] top-0 w-[950px]" data-name="Container" />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-[1449px] overflow-clip rounded-[10px] top-0 w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback7} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.78px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                رؤية المخرج
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-[966px] overflow-clip rounded-[10px] top-0 w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback8} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <ContainerText1 text="التصوير السينمائي" />
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-[483px] overflow-clip rounded-[10px] top-0 w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback9} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.83px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                الكتابة الإبداعية
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-0 overflow-clip rounded-[10px] top-0 w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback10} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <ContainerText1 text="هندسة التلقين" />
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-[1449px] overflow-clip rounded-[10px] top-[218.5px] w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback11} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.8px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                الممثل الذكي
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-0 overflow-clip rounded-[10px] top-[218.5px] w-[471px]" data-name="Link">
          <div className="absolute bg-[#ececf0] h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <div className="absolute left-[190.5px] size-[88px] top-[58.25px]" data-name="Image (Error loading image)">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageErrorLoadingImage} />
            </div>
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.95px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                تحليل المشهد
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-[1449px] overflow-clip rounded-[10px] top-[437px] w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback12} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.75px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                العصف الذهني
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-0 overflow-clip rounded-[10px] top-[437px] w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback13} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.53px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                لوحة التحليلات
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-[1449px] overflow-clip rounded-[10px] top-[655.5px] w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.86px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                التحليل الدرامي
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-[966px] overflow-clip rounded-[10px] top-[655.5px] w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.56px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                مشروع جديد
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-[483px] overflow-clip rounded-[10px] top-[655.5px] w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234.55px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                المحرر
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[206.5px] left-0 overflow-clip rounded-[10px] top-[655.5px] w-[471px]" data-name="Link">
          <div className="absolute h-[204.5px] left-0 top-0 w-[469px]" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[204.5px] left-0 opacity-80 to-[rgba(0,0,0,0)] top-0 via-1/2 w-[469px]" data-name="Container" />
          <div className="absolute border-2 border-[rgba(0,0,0,0)] border-solid h-[204.5px] left-0 rounded-[10px] top-0 w-[469px]" data-name="Container" />
          <div className="absolute h-[36px] left-0 top-[168.5px] w-[469px]" data-name="Container">
            <div className="absolute h-[20px] left-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] top-[4px] w-[469px]" data-name="Container">
              <p className="absolute font-['Cairo:Bold',sans-serif] font-bold leading-[20px] left-[234px] not-italic text-[14px] text-center text-nowrap text-white top-0 translate-x-[-50%]" dir="auto">
                مهندس الديكور
              </p>
            </div>
            <ContainerText text="فتح التطبيق" />
          </div>
        </div>
      </div>
    </div>
  );
}