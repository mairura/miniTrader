import { Layout } from '@/components/dashboard';
import React, { useContext } from 'react';
import Image from 'next/image';
import {
  Amount,
  MainBg,
  ProgressChart,
  ProgressData,
  ProjectCash,
  ProjectContainer,
  ProjectContent,
  ProjectDetails,
  ProjectGrid,
  ProjectionsHeader,
  ProjectsHeader,
  RateText,
  StrategiesBtn,
  StrategiesContent,
  StrategiesData,
  StrategiesName,
} from '@/components/dashboard/Projections.styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from '@apollo/client';
import {
  CANCEL_SUBSCRIPTION_QUERY,
  SUBSCRIPTIONS_QUERY,
} from '@/queries/subscriptions';
import { AuthContext } from '@/context';
import { useRouter } from 'next/router';

const Projection = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const [cancelSubscription] = useMutation(CANCEL_SUBSCRIPTION_QUERY, {
    onCompleted: () => {
      toast.success('Subscription cancelled', {
        duration: 4000,
        position: 'top-center',
        style: {},
        icon: '✅',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });

      router.push('/dashboard');
    },

    onError: (error) => {
      toast(`Error cancelling subscription: ${error}`, {
        duration: 4000,
        position: 'top-center',
        style: {},
        icon: '❗',
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    },
  });

  const handleCancel = (id: string) => {
    cancelSubscription({ variables: { id } });
  };

  const percentage = 75;

  const { data, error } = useQuery(SUBSCRIPTIONS_QUERY, {
    variables: {
      user: user?.id || '',
    },
  });
  return (
    <Layout>
      <MainBg>
        <ProjectContainer>
          <ProjectsHeader>Track your Progress</ProjectsHeader>
          <ProjectContent>
            <ProjectGrid>
              <ProgressData>
                <ProgressChart>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: 'butt',
                      textSize: '16px',
                      pathTransitionDuration: 0.5,
                      pathColor: '#FF31FA',
                      textColor: '#fff',
                    })}
                  />
                </ProgressChart>
                <RateText>Your Conversion Rate</RateText>
              </ProgressData>
            </ProjectGrid>
            <ProjectGrid>
              <ProjectCash>
                <Amount>$23,414</Amount>
                Your Earnings
              </ProjectCash>
            </ProjectGrid>
            <ProjectGrid>
              <ProjectCash>
                <Amount>ETH</Amount>
                Your Top Stock
              </ProjectCash>
            </ProjectGrid>
          </ProjectContent>
          <ProjectDetails>
            <ProjectionsHeader>Subscriptions</ProjectionsHeader>
            {data?.subscriptions
              .filter((s: any) => s)
              .map(
                (
                  subscription: {
                    id: string;
                    trader: {
                      username: string;
                      address: string;
                      pnl: number;
                    };
                  },
                  i: number,
                ) => {
                  let { trader } = subscription;
                  console.log({ trader });
                  return (
                    <StrategiesContent key={i}>
                      <Image
                        src={`https://avatars.dicebear.com/api/avataaars/${trader.address}.svg`}
                        height={30}
                        width={30}
                        alt="profile icon"
                      />
                      <StrategiesName>{trader.username}</StrategiesName>
                      <StrategiesData>
                        <Image
                          src={
                            trader.pnl > 0
                              ? '/UpChevron.svg'
                              : '/DownChevron.svg'
                          }
                          height={15}
                          width={15}
                          alt={trader.pnl > 0 ? 'up' : 'down'}
                        />
                        &nbsp;&nbsp;
                        <StrategiesName>{trader.pnl}</StrategiesName>
                      </StrategiesData>
                      <StrategiesBtn
                        onClick={() => handleCancel(subscription.id)}
                      >
                        Cancel
                      </StrategiesBtn>
                    </StrategiesContent>
                  );
                },
              )}
            {(data?.subscriptions || []).length === 0 && (
              <StrategiesContent>
                <StrategiesName>No Subscriptions Yet</StrategiesName>
              </StrategiesContent>
            )}
          </ProjectDetails>
        </ProjectContainer>
      </MainBg>
      ;
    </Layout>
  );
};

export default Projection;
