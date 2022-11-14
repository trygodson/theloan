import {Card, Box, Typography, Avatar, Grid, alpha, useTheme, styled} from "@mui/material";
import Text from "../../components/text";

const AvatarWrapper = styled(Avatar)(
  ({theme}) => `
    margin: ${theme.spacing(0, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === "dark" ? theme.colors.alpha.trueWhite[30] : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

function WatchListColumn() {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      zoom: {
        enabled: false,
      },
    },
    fill: {
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false,
    },
    theme: {
      mode: theme.palette.mode,
    },
    stroke: {
      show: true,
      colors: [theme.colors.primary.main],
      width: 3,
    },
    legend: {
      show: false,
    },
    labels: ["Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      tickAmount: 5,
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        title: {
          formatter: function () {
            return "Price: $";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
      <Grid item md={4} xs={12}>
        <Card
          sx={{
            overflow: "visible",
          }}
        >
          <Box
            sx={{
              px: 3,
              pb: 0,
              pt: 3,
            }}
          >
            <Typography variant="h3">Last Transaction</Typography>
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AvatarWrapper>
                  <img
                    alt="BTC"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8RCdcOp_jgNctTWWgMbQniLl2dxqRMNYmQ&usqp=CAU"
                  />
                </AvatarWrapper>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h4" sx={{mr: 1}} noWrap>
                      Bitcoin
                    </Typography>
                    <Text>+12.5%</Text>
                  </Box>
                  <Typography variant="subtitle1" noWrap>
                    BTC
                  </Typography>
                </Box>
              </Box>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AvatarWrapper>
                  <img
                    alt="BTC"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8RCdcOp_jgNctTWWgMbQniLl2dxqRMNYmQ&usqp=CAU"
                  />
                </AvatarWrapper>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h4" sx={{mr: 1}} noWrap>
                      Bitcoin
                    </Typography>
                    <Text>+12.5%</Text>
                  </Box>
                  <Typography variant="subtitle1" noWrap>
                    BTC
                  </Typography>
                </Box>
              </Box>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AvatarWrapper>
                  <img
                    alt="BTC"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8RCdcOp_jgNctTWWgMbQniLl2dxqRMNYmQ&usqp=CAU"
                  />
                </AvatarWrapper>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h4" sx={{mr: 1}} noWrap>
                      Bitcoin
                    </Typography>
                    <Text>+12.5%</Text>
                  </Box>
                  <Typography variant="subtitle1" noWrap>
                    BTC
                  </Typography>
                </Box>
              </Box>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card
          sx={{
            overflow: "visible",
          }}
        >
          <Box
            sx={{
              px: 3,
              pb: 0,
              pt: 3,
            }}
          >
            <Typography variant="h3">Last Transaction</Typography>
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AvatarWrapper>
                  <img
                    alt="BTC"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8RCdcOp_jgNctTWWgMbQniLl2dxqRMNYmQ&usqp=CAU"
                  />
                </AvatarWrapper>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h4" sx={{mr: 1}} noWrap>
                      Bitcoin
                    </Typography>
                    <Text>+12.5%</Text>
                  </Box>
                  <Typography variant="subtitle1" noWrap>
                    BTC
                  </Typography>
                </Box>
              </Box>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AvatarWrapper>
                  <img
                    alt="BTC"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8RCdcOp_jgNctTWWgMbQniLl2dxqRMNYmQ&usqp=CAU"
                  />
                </AvatarWrapper>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h4" sx={{mr: 1}} noWrap>
                      Bitcoin
                    </Typography>
                    <Text>+12.5%</Text>
                  </Box>
                  <Typography variant="subtitle1" noWrap>
                    BTC
                  </Typography>
                </Box>
              </Box>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AvatarWrapper>
                  <img
                    alt="BTC"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8RCdcOp_jgNctTWWgMbQniLl2dxqRMNYmQ&usqp=CAU"
                  />
                </AvatarWrapper>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h4" sx={{mr: 1}} noWrap></Typography>
                    <Text>+12.5%</Text>
                  </Box>
                  <Typography variant="subtitle1" noWrap>
                    BTC
                  </Typography>
                </Box>
              </Box>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
            {/* <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1
                }}
              >
                $56,475.99
              </Typography>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Label color="success">+$500</Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1
                }}
              >
                last 24h
              </Typography>
            </Box> */}
          </Box>
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card
          sx={{
            overflow: "visible",
          }}
        >
          <Box
            sx={{
              px: 3,
              pb: 0,
              pt: 3,
            }}
          >
            <Typography variant="h3">Most Perfomant Item</Typography>
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AvatarWrapper>
                  <img
                    alt="BTC"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8RCdcOp_jgNctTWWgMbQniLl2dxqRMNYmQ&usqp=CAU"
                  />
                </AvatarWrapper>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h4" sx={{mr: 1}} noWrap>
                      Bitcoin
                    </Typography>
                    <Text>+12.5%</Text>
                  </Box>
                  <Typography variant="subtitle1" noWrap>
                    BTC
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AvatarWrapper>
                  <img
                    alt="BTC"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8RCdcOp_jgNctTWWgMbQniLl2dxqRMNYmQ&usqp=CAU"
                  />
                </AvatarWrapper>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h4" sx={{mr: 1}} noWrap>
                      Bitcoin
                    </Typography>
                    <Text>+12.5%</Text>
                  </Box>
                  <Typography variant="subtitle1" noWrap>
                    BTC
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              px: 3,
              py: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AvatarWrapper>
                  <img
                    alt="BTC"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8RCdcOp_jgNctTWWgMbQniLl2dxqRMNYmQ&usqp=CAU"
                  />
                </AvatarWrapper>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h4" sx={{mr: 1}} noWrap>
                      Bitcoin
                    </Typography>
                    <Text>+12.5%</Text>
                  </Box>
                  <Typography variant="subtitle1" noWrap>
                    BTC
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
      {/* <Grid item md={4} xs={12}>
        <Card
          sx={{
            overflow: 'visible'
          }}
        >
          <Box
            sx={{
              p: 3
            }}
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="ETH"
                  src="/static/images/placeholders/logo/ethereum.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Ethereum
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  ETH
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1
                }}
              >
                $1,968.00
              </Typography>
              <Text color="error">
                <b>-3.24%</b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Label color="error">-$90</Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1
                }}
              >
                last 24h
              </Typography>
            </Box>
          </Box>
          <Chart
            options={chartOptions}
            series={chart2Data}
            type="area"
            height={200}
          />
        </Card>
      </Grid>
      <Grid item md={4} xs={12}>
        <Card
          sx={{
            overflow: 'visible'
          }}
        >
          <Box
            sx={{
              p: 3
            }}
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="ADA"
                  src="/static/images/placeholders/logo/cardano.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Cardano
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  ADA
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                pt: 3
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1
                }}
              >
                $23.00
              </Typography>
              <Text color="error">
                <b>-0.33%</b>
              </Text>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Label color="error">-$5</Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1
                }}
              >
                last 24h
              </Typography>
            </Box>
          </Box>
          <Chart
            options={chartOptions}
            series={chart3Data}
            type="area"
            height={200}
          />
        </Card>
      </Grid> */}
    </Grid>
  );
}

export default WatchListColumn;
