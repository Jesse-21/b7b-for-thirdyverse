import React from "react";
import { useParams, Navigate } from "react-router-dom";

import { PostFeedWithContext } from "../containers/post/PostFeedWithContext";
import { CreatePostOrReply } from "../containers/post/CreatePostOrReply";

import {
  CommunityContextProvider,
  useCommunityContext,
} from "../context/CommunityContext";

export const withDimensionContext = (Component) => {
  const Memo = React.memo(Component);
  const CommunityContextProviderMemo = React.memo(CommunityContextProvider);

  // eslint-disable-next-line react/display-name
  return () => {
    const { dimension } = useParams();
    console.log("dimension", dimension);
    const domain = React.useMemo(() => {
      return dimension?.split(".")?.[0];
    }, [dimension]);
    const tld = React.useMemo(() => {
      return dimension?.split(".")?.[1];
    }, [dimension]);
    return (
      <CommunityContextProviderMemo domain={domain} tld={tld}>
        <Memo />
      </CommunityContextProviderMemo>
    );
  };
};

const withCommunityContext = (Component) => {
  const Memo = React.memo(Component, (prev, next) => {
    return prev.communityId === next.communityId;
  });

  // eslint-disable-next-line react/display-name
  return () => {
    const { community, loading } = useCommunityContext();
    console.log("withCommunityContext");
    if (loading) return <>Loading...</>;
    if (!community?._id) {
      return <Navigate to={`/d/${community?.bebdomain}/admin`} />;
    }
    if (!community.currentAccountPermissions.canRead) return <>No access</>;

    return <Memo communityId={community?._id} />;
  };
};

export const DimensionContent = ({ communityId }) => {
  return (
    <>
      <CreatePostOrReply
        placeholder={"Publish a public message!"}
        colorScheme="pink"
        size="lg"
        communityId={communityId}
      ></CreatePostOrReply>
      <PostFeedWithContext
        filters={{
          community: communityId,
          excludeChannels: true,
          excludeComments: true,
        }}
      ></PostFeedWithContext>
    </>
  );
};

export const Dimension = React.memo(withCommunityContext(DimensionContent));
