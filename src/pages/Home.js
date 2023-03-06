import { Text, Box, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { DimensionHeader } from "../containers/navigation/DimensionHeader";

import { SearchDimensionInput } from "../components/input/SearchDimensionInput";

import { HomeFeedWithUniverseSelect } from "./etc/HomeFeedWithUniverseSelect";
import { DimensionRoutesLayout } from "./layout/DimensionRoutesLayout";

import { withUriQueryParams } from "../helpers/hoc/withUriQueryParams";
import { withUriApolloProvider } from "../helpers/hoc/withUriApolloProvider";

export const HomeContent = ({ uri }) => {
  return (
    <DimensionRoutesLayout>
      <Box
        display={"flex"}
        p={[2, null, null, 8]}
        flexDir={["column-reverse", null, null, "row"]}
      >
        <Box flex="1" pr={[0, null, null, 8]}>
          <HomeFeedWithUniverseSelect uri={uri} />
        </Box>
        <Box w={["100%", null, null, "sm"]} mb={[8, null, null, 0]}>
          <Text fontSize="3xl" fontWeight="bold" lineHeight={1.15} mb={4}>
            An{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bebverse/b7b"
              color="blue.600"
            >
              open-source
            </Link>{" "}
            BEB dimension browser
          </Text>
          <Text>
            The BEB (Blockchain-Enabled Broadcast) protocol is an open messaging
            protocol for communities. It is simple enough for anyone to deploy
            their own self-hosted server, known as a {"dimension"} host. A
            server can host multiple dimensions!
          </Text>
          <Text marginTop={2}>
            Dimensions are queried against the{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bebverse/contracts/blob/main/src/Resolver.sol"
              color="blue.600"
            >
              deployed resolver contract
            </Link>
            , which allows domain holders to map their domain to their{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bebverse/universe"
              color="blue.600"
            >
              self-hosted server
            </Link>
            .
          </Text>

          <Box marginTop={4}>
            <Text fontSize="xl" fontWeight="bold">
              Here are some useful links to learn about the BEB protocol:
              <Text fontSize="xl" fontWeight="bold">
                <Box marginLeft={10}>
                  <ul>
                    <li>
                      <Link
                        color="blue.600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/bebverse/protocol"
                      >
                        github.com/bebverse/protocol
                      </Link>
                    </li>
                    <li>
                      <Link
                        color="blue.600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/bebverse/universe"
                      >
                        github.com/bebverse/universe
                      </Link>
                    </li>
                    <li>
                      <Link
                        color="blue.600"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/bebverse/b7b"
                      >
                        github.com/bebverse/b7b
                      </Link>
                    </li>
                  </ul>
                </Box>
              </Text>
            </Text>
          </Box>

          <Box marginTop={4}>
            <Text fontSize="md">
              <b>Disclaimer:</b> B7B is a browser for BEB dimensions, which are
              entirely self-hosted by third-parties. The developers and hosts of
              B7B are not responsible for the content of dimensions. Contact the
              host of the appropriate dimension to report any concerns.
            </Text>
          </Box>
          <Box mt={4}>
            <Button w="100%" rounded="full" colorScheme={"pink"}>
              Create Post
            </Button>
            <Button
              w="100%"
              rounded="full"
              variant={"outline"}
              mt={2}
              as="a"
              href="https://beb.domains"
              target="_blank"
            >
              Create Community
            </Button>
          </Box>
        </Box>
      </Box>
    </DimensionRoutesLayout>
  );
};

export const Home = withUriQueryParams(withUriApolloProvider(HomeContent));
