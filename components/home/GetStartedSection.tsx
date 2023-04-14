import { Grid } from '@/components/common/Grid';
import {
  GetStartedBody,
  StartedHeader,
  StartedImage,
} from './GetStartedSection.styles';
import { RightGrid } from '@/components/common/RightGrid';
import { Header } from '@/components/common/Header';
import { Paragraph } from '@/components/common/Paragraph';
import { Photos } from '@/components/common/Image';
import { Container } from '../common/Container';
import Image from 'next/image';

export default function GettingStartedSection() {
  return (
    <GetStartedBody className="started-bg">
      <Container>
        <StartedHeader>How to Use Minitrader</StartedHeader>
        <Grid>
          <StartedImage>
            <Photos>
              <Image
                priority
                src="/Vault.svg"
                height={432}
                width={637}
                alt="Vault icon"
              />
            </Photos>
          </StartedImage>
          <StartedImage>
            <RightGrid>
              <Header>Get Started</Header>
              <Paragraph>
                Select Go to start using mini trade ,and make passive income
                with our
                <br /> preselected automated trading bots and other investment
                platforms
                <br /> aggregated to one place for your convenience. Grow your
                savings on
                <br /> mini trade with our curated savings options and rest
                assured that your
                <br /> assets will grow on minitrade.
              </Paragraph>
            </RightGrid>
          </StartedImage>
        </Grid>
        <Grid mobileDirection="column-reverse">
          <RightGrid>
            <Header>Risk Selection</Header>
            <Paragraph>
              Select your investment pln according to your risk appetite. We
              provide
              <br /> you with three models to invest in. You can use one or
              many. Trade
              <br /> however you wish.
            </Paragraph>
          </RightGrid>
          <Photos>
            <Image
              priority
              src="/Levels.svg"
              height={632}
              width={837}
              alt="levels icon"
            />
          </Photos>
        </Grid>
        <Grid>
          <Photos>
            <Image
              priority
              src="/Phone.svg"
              height={732}
              width={837}
              alt="phone icon"
            />
          </Photos>
          <RightGrid>
            <Header>Selecting Timespan</Header>
            <Paragraph>
              The risk model automatically selects a time span for you but you
              can
              <br /> extend the time as you wish within the investment plan that
              you
              <br /> chose.
            </Paragraph>
          </RightGrid>
        </Grid>
      </Container>
    </GetStartedBody>
  );
}
