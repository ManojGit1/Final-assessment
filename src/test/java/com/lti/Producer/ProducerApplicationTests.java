package com.lti.Producer;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProducerApplicationTests {

	@Test
	void contextLoads() {
		
		String obj1="Junit";
		String obj2="Junit";
		assertEquals(obj1,obj2);
	}

}
