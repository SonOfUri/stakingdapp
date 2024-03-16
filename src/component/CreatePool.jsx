import { useState } from "react";
import { Box, Button, Card, Flex, Text, TextField } from "@radix-ui/themes";
import useCreatePool from "../hooks/useCreatePool.js";

const CreatePool = () => {
    const [reward, setReward] = useState("");
    const createPool = useCreatePool(reward);

    const handleChange = (e) => {
        setReward(e.target.value);
    };

    const handleCreatePoolClick = async () => {
        await createPool();
        setReward('');
    };

    return (
        <Card size="2" style={{ width: 425 }}>
            <Flex gap="" align="center">
                <Box width={"100%"}>
                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Enter Reward:
                            </Text>
                            <TextField.Input
                                placeholder="Enter Reward"
                                value={reward}
                                onChange={handleChange}
                            />
                        </label>
                        <Button onClick={handleCreatePoolClick}>
                            Create Pool
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
};

export default CreatePool;