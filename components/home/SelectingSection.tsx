import { GetStartedBody, StartedImage } from './GetStartedSection.styles';
import Image from 'next/image';
import { Grid } from '@/components/common/Grid';
import { Photos } from '@/components/common/Image';
import { RightGrid } from '@/components/common/RightGrid';
import { Header } from '@/components/common/Header';
import { Paragraph } from '@/components/common/Paragraph';
import { Container } from '../common/Container';

export default function SelectingPage() {
  return (
    <GetStartedBody className="last-section">
      <Container>
        <Grid mobileDirection="column-reverse">
          <StartedImage>
            <RightGrid>
              <Header>Select Trading Mode</Header>
              <Paragraph>
                You want to trade by yourself like a pro? Go ahead. You want to
                copy
                <br /> the pros as they trade? We got you. You can Do It
                Yourself,
                <br />
                useAutomated trading or choose from a pool of investment
                portfolios.
              </Paragraph>
            </RightGrid>
          </StartedImage>
          <StartedImage>
            <Photos>
              <Image
                priority
                src="/Chess.svg"
                height={321}
                width={583}
                alt="hand playing chess icon"
              />
            </Photos>
          </StartedImage>
        </Grid>

        <Grid>
          <StartedImage>
            <Photos>
              <Image
                priority
                src="/MobileWallet.svg"
                height={521}
                width={383}
                alt="mobile wallet icon"
              />
            </Photos>
          </StartedImage>
          <StartedImage>
            <RightGrid>
              <Header>Connect Your Wallet</Header>
              <Paragraph>
                After selecting your risk module and trading
                <br /> mode, you can go ahead and connect your
                <br /> wallet.
              </Paragraph>
            </RightGrid>
          </StartedImage>
        </Grid>
        <Grid mobileDirection="column-reverse">
          <StartedImage>
            <RightGrid>
              <Header>Monitor Trade Progress & Withdraw funds</Header>
              <Paragraph>
                Watch the growth steps that your investment grow by each day
                <br />
                through a nice simple animated graph that&rsquo;s easy to
                understand and
                <br /> interpret . <br />
                Mini trade allows you to make more than one investment and you
                can
                <br /> easily switch between monitoring the different
                investments
              </Paragraph>
            </RightGrid>
          </StartedImage>
          <StartedImage>
            <Photos>
              <Image
                priority
                src="/Monitor.svg"
                height={415}
                width={400}
                alt="monitor tokens icon"
              />
            </Photos>
          </StartedImage>
        </Grid>
      </Container>
    </GetStartedBody>
  );
}
