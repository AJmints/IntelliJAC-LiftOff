package com.intellijac.backend_intellijac.configuration;

import com.intellijac.backend_intellijac.authentication.AuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebConfig implements WebMvcConfigurer {

    @Bean
    public AuthenticationFilter authenticationFilter(){
        return  new AuthenticationFilter();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(authenticationFilter());
    }
}
